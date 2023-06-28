function ModuleDetail() {
  const skills = ['Styled Components', 'Bootstrap', 'CSS RAIZ', 'Tailwind', 'PHP'];
  return (
    <section>
      <p>Habilidades</p>
      <ul>
        As habilidades vão vir aqui
        {skills.map((habilidade) => (
          // eslint-disable-next-line react/jsx-key
          <li>{habilidade}</li>
        ))}
      </ul>
    </section>
  );
}

export default ModuleDetail;
