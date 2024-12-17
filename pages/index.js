// pages/index.js
export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Página em Construção</h1>
        <p style={styles.text}>
          Estamos trabalhando duro para trazer novidades em breve!
        </p>
        <div style={styles.loader}></div>
        <p style={styles.text}>Por favor, volte mais tarde.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: '0',
    backgroundColor: '#f8f9fa',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  content: {
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333333',
  },
  text: {
    fontSize: '1.2rem',
    color: '#555555',
    margin: '10px 0',
  },
  loader: {
    margin: '20px auto',
    border: '8px solid #f3f3f3',
    borderRadius: '50%',
    borderTop: '8px solid #3498db',
    width: '60px',
    height: '60px',
    animation: 'spin 2s linear infinite',
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
};