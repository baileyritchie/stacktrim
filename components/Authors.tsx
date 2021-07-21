type Props = {
  authors:string[];
}

const Authors: React.FC<Props> = ({ authors }: Props) => {
  // get all the authors that write a particular
  return (
    <>
      <h2>Article By</h2>
      <ul className="flex flex-row justify-start align-center list-none">
        {
          authors.map((author, index) => (
            <li className="list-none" key={index}>{author}</li>
          ))
        }
      </ul>
    </>
  );
};

export default Authors;