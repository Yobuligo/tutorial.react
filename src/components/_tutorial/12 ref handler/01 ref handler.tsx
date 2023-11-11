/**
 * Normally there is a two way communication between components:
 *
 * 1. values are injected from the caller to the callee component via property interface to initial it
 * 2. caller components are notified about events of the callee via callback methods which are injected during the initialization
 *
 * But sometimes in very rar cases (and it should be uses very rarely) the caller should get access to specific properties of the callee, without the need to register on specific events, managing a use state by the caller itself. E.g. the caller wants to know the edit mode of the callee, which is handled by the called.
 *
 * To provide those, readable information there is the concept of a reference handler. The reference handler provides access to specific, exposed information of a component. As reference means refer to, these data should be live data. So they must be up to date.
 *
 * The concept contains the two parts provider (the callee) and the consumer (caller). The caller can use the hook `useRefHandler`, which returns an reference handler instance and provides access to the data. This ref handler instance communicates between caller and callee. The callee provides that reference handler and the data via the property interface.
 *
 * The following code shows how to provide exposed specific properties via reference handler.
 */

import { ReactNode, useRef, useState } from "react";

namespace RefHandler {
  /**
   * An implementation of this interface is a reference handler,
   * which provides access to specific exposed properties of a component.
   */
  export interface IRefHandler<T> {
    value: T | undefined;
  }

  /**
   * An implementation of this interface is a reference handler injector,
   * which is responsible for providing the data for a reference handler.
   */
  export interface IRefHandlerInjector<T> extends IRefHandler<T> {
    inject(value: T): void;
  }

  /**
   * This function returns if the given {@link value} is of type {@link IRefHandlerInjector}.
   */
  export function isRefHandlerInjector<T>(
    value: any
  ): value is IRefHandlerInjector<T> {
    return "value" in value && "inject" in value;
  }

  /**
   * This service is a generic ref handler.
   * It is the interface between two components, with different roles:
   * 1. provider: that exposes specific properties of itself
   * 2. consumer: that consumes the exposed properties of the provider
   *
   * An instance of that class is responsible for managing the provided data and giving access to the consumer.
   */
  export class RefHandler<T> implements IRefHandlerInjector<T> {
    constructor(
      public value: T | undefined,
      private readonly setValue: React.Dispatch<
        React.SetStateAction<T | undefined>
      >
    ) {}

    inject(value: T): void {
      if (this.hasChanged(value)) {
        this.value = value;
        this.setValue(value);
      }
    }

    /**
     * Changes if the {@link value} has changed.
     * This means not the reference, but the content of the {@link value}.
     */
    private hasChanged(value: T) {
      if (!this.value) {
        return true;
      }

      for (const propName in value) {
        if (value[propName] !== this.value[propName]) {
          return true;
        }
      }

      return false;
    }
  }

  /**
   * This custom hook is responsible for providing access to specific exposed properties of a component.
   *
   * E.g. the parent component should be aware about the "edit mode" of a child component.
   * Instead that the parent injects an useState value and setter, it can get the information from the child via reference handler.
   */
  export function useRefHandler<T>(): IRefHandler<T | undefined> {
    const [value, setValue] = useState<T | undefined>(undefined);
    const refHandler = useRef(new RefHandler<T>(value, setValue));
    return refHandler.current;
  }

  /**
   * Create an interface which contains the properties that should be exposed.
   */
  interface IEditableCardRef {
    editMode: boolean;
  }

  /**
   * Extend the property interface of the component by property `refHandler` which must be of type `IRefHandler`. `IRefHandler` needs a generic parameter which represents the data of the ref handler, which, in the example, is `IEditableCardRef`.
   */
  interface IEditableCardProps {
    children: ReactNode;
    refHandler?: IRefHandler<IEditableCardRef | undefined>;
  }

  /**
   * Finally the callee must expose the properties like here in the example the property `editMode` for a component EditableCard.
   * The data can be provided via method `inject` of an object of type `IRefHandlerInjector`.
   * The hook `useRefHandler` creates an instance of class `RefHandler` which implements both interfaces `IRefHandler` and `IRefHandlerInjector`.
   * To check if the `refHandler` is of type `IRefHandlerInjector` the function `isRefHandlerInjector` can be used.
   */
  const EditableCard: React.FC<IEditableCardProps> = (props) => {
    const [editMode, setEditMode] = useState(true);

    // check if the refHandler is requested
    // Inject values to the refHandler by method inject
    if (props.refHandler) {
      if (isRefHandlerInjector<IEditableCardRef>(props.refHandler)) {
        props.refHandler.inject({ editMode });
      }
    }

    return <></>;
  };

  /**
   * Do the following for consuming the exposed properties:
   * Create an instance of the `refHandler` via hook `useRefHandler`. By setting `refHandler` to property `refHandler` of the `EditableCard`, the connection to the callee is made and the properties can be accessed.
   */
  const Caller: React.FC = () => {
    const refHandler = useRefHandler<IEditableCardRef>();
    return (
      <EditableCard refHandler={refHandler}>
        <input type="text" disabled={refHandler.value?.editMode} />
      </EditableCard>
    );
  };
}
