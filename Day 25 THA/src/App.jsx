import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function App() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://source.unsplash.com/random/100px180"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      {[ 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light',
      'dark', ].map((variant, idx) => (
      <Alert key={idx} variant={variant}>
        This is a {variant} alert—check it out!
      </Alert>
      ))}
    </div>
  );
}


export default App;
