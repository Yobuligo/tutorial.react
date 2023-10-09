/**
 * In TypeScript or React or both there occurs an error when using this with classes in components.
 * This is then replaced by an unexpected component.
 *
 * Lets assume we have a class with methods.
 * The methods are returned as return parameter in hooks.
 * These methods are injected to another component via props.
 * Here in that component we call the methods of the class, which were injected via props.
 * In that case "this" in the class isn't the class anymore but the props of the component.
 */
