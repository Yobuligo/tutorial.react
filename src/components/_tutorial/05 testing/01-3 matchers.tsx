/**
 * Matchers are used by the expect function, which is global available and must not be imported.
 * There are a lot matchers, but here are some more important:
 * - expect(["a", "b"]).toHaveLength(2) -> Array has a specific number of elements
 * - expect(5).toEqual(5)
 * - expected("aber").toContain("b") 
 * - expect(fn).toThrow() -> Does function throws exception?
 * - expect(mock).toHaveBeenCalled() -> Was mock function called?
 * - expect(element).toBeInTheDocument() -> element in document?
 * - expect(element).toBeEnabled() -> Element (like a button) is not disabled?
 * - expect(element).toHaveClass() -> Does element has a class name?
 * - expect(element).toHaveTextContent() -> Does element has particular text?
 * - expect(element).toHaveValue() -> Does input, select or textarea specific value?
 */