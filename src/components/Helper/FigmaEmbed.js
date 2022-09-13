function FigmaEmbed(props) {
  const src = `https://www.figma.com/embed?embed_host=astra&url=${props.url}`;

  return (
    <div className="figma-embed">
      <iframe height="450" width="800" src={src} allowFullScreen />
    </div>
  );
};

export default FigmaEmbed;