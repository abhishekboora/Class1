const Footer = () => (
  <footer style={{
    width: '100%',
    background: 'linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%)',
    color: '#fff',
    textAlign: 'center',
    padding: '18px 0',
    fontSize: '1rem',
    marginTop: 40,
    borderRadius: '18px 18px 0 0',
    boxShadow: '0 -2px 12px rgba(60,60,120,0.08)'
  }}>
    © {new Date().getFullYear()} Boora Classes. All rights reserved.
  </footer>
);
export default Footer; 