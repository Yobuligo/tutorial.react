// A section is next to span another tag that behaves like a div.
// Other than a div it groups elements, which belong logically together

export const SectionComponent: React.FC = () => {
  return (
    <section>
      <label htmlFor="text">Text</label>
      <input id="text" type="text" />
    </section>
  );
};
