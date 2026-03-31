const Button = ({ title, bgColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: '#fff',
        border: 'none',
        padding: '8px 14px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: '500',
        fontSize: '14px',
      }}
    >
      {title}
    </button>
  )
}

export default Button
