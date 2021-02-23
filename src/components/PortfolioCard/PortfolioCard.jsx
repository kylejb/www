import {
  GridColumn,
  GridContainer,
  GridRow,
  Card,
  CardBack,
  CardFront,
  CardTitle,
  CardDescription,
} from './expStyledComponent';

const ExpComponent = ( props ) => {

  const flipCard = (event) => {
    event.currentTarget.classList.toggle('flipped');
  };

  return (
    <Card onClick={flipCard}>
        <CardFront>
          <CardTitle>{props.project.title}</CardTitle>
          <CardDescription>props.project.desc</CardDescription>
        </CardFront>
        <CardBack>
          <CardDescription><u>Placeholder:</u><i>{props.project.id} will be added (e.g., gifs and/or demo url)</i></CardDescription>
        </CardBack>
    </Card>
  );
};

export default ExpComponent;
