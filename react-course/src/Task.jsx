export function TaskCard() {

  const cardStyles = { backgroundColor: '#202020', color: '#fff', padding: '20px' };
  const titleStyles = { fontWeight: 'lighter' };

  return (
    <div style={cardStyles}>
      <h1 style={titleStyles}>Mi primer tarea</h1>
      <p className="card-header">Tarea realizada</p>
    </div>
  );
}