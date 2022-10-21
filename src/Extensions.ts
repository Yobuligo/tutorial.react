/* eslint-disable no-extend-native */
export {};

declare global {
  interface String {
    isEmpty(): boolean;
    isNotEmpty(): boolean;
  }

  interface Array<T> {
    isEmpty(): boolean;
    isNotEmpty(): boolean;
  }
}

String.prototype.isEmpty = function (): boolean {
  if (this.length === 0) {
    return true;
  } else {
    return false;
  }
};

String.prototype.isNotEmpty = function (): boolean {
  if (this.isEmpty()) {
    return false;
  } else {
    return true;
  }
};

Array.prototype.isEmpty = function (): boolean {
  if (this.length === 0) {
    return true;
  } else {
    return false;
  }
};

Array.prototype.isNotEmpty = function (): boolean {
  if (this.isEmpty()) {
    return false;
  } else {
    return true;
  }
};
