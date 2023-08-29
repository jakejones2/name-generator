function List({ names }) {
  return (
    <section id="names">
      <ol>
        {names.map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ol>
    </section>
  );
}

export default List;
