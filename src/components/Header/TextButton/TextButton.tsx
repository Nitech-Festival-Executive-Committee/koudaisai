interface TextButtonProps {
  text: string;
}

export default function TextButton(props: TextButtonProps) {
  return (
    <div className="nav-item non-expandable pl-4 pl-md-0">
      <a className="nav-link" href="./about/" aria-label={props.text}>
        {props.text}
      </a>
    </div>
  );
}
