import {
  GridContainer,
  GridRow,
  GridColumn,
  Card,
  CardBack,
  CardFront,
  CardSide,
  CardTitle,
  CardDescription,
  CardNumber,
} from './expStyledComponent';

const ExpComponent = ( props ) => {

  const flipCard = (event) => {
    event.currentTarget.classList.toggle('flipped');
  };

  // Grid Container
  // Grid Row
  // Grid Column
  // all of the above belonds in Portfolio Page

  return (
    <div>
      <GridContainer>
        <GridRow>
          <GridColumn sm='6' lg='4'>
            <Card onClick={flipCard}>
              <CardFront>
                <CardTitle>{props.project.title}</CardTitle>
                <CardDescription>{props.project.desc}</CardDescription>
              </CardFront>
              <CardBack>
                <CardDescription><u>Placeholder:</u><i>Content will be added (e.g., gifs and/or demo url)</i></CardDescription>
              </CardBack>
            </Card>
          </GridColumn>

          <GridColumn sm='6' lg='4'>
            <Card onClick={flipCard}>
              <CardFront>
                <CardNumber>2.</CardNumber>

                <CardTitle>Card</CardTitle>
              </CardFront>

              <CardBack>
                <CardDescription>The core idea for the book came to her after a 1943 telephone conversation with a friend, who asserted that Rand owed it to her readers to write fiction about her philosophy.</CardDescription>
              </CardBack>
            </Card>
          </GridColumn>

          <GridColumn sm='6' lg='4'>
            <Card onClick={flipCard}>
              <CardFront>
                <CardNumber>3.</CardNumber>

                <CardTitle>Card</CardTitle>
              </CardFront>

              <CardBack>
                <CardDescription>To produce Atlas Shrugged, Rand conducted research on the American railroad industry. Her previous work on a proposed (but never realized) screenplay.</CardDescription>
              </CardBack>
            </Card>
          </GridColumn>

          <GridColumn sm='6' lg='4'>
            <Card onClick={flipCard}>
              <CardFront>
                <CardNumber>4.</CardNumber>

                <CardTitle>Card</CardTitle>
              </CardFront>

              <CardBack>
                <CardDescription>Atlas Shrugged is set in a dystopian United States at an unspecified time, in which the country has a "National Legislature" instead of Congress and a "Head of State" instead of a President.</CardDescription>
              </CardBack>
            </Card>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </div>
  );
};

export default ExpComponent;
