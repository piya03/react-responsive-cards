import styled, { css } from "styled-components";
import { Container, MobileContainer } from "./styled";
import HC3Card from "./CardsGroups/HC3Card/HC3Card";
import HC6Card from "./CardsGroups/HC6Card/HC6Card";
import HC5Card from "./CardsGroups/HC5Card/HC5Card";
import HC9CardContainer from "./CardsGroups/HC9CardDynamicWidth/HC9CardDynamicWidth";
import HC1Card from "./CardsGroups/HC1Card/HC1Card";
import ScrollComponent from "./Component/ScrollComponent/ScrollComponent";

function App() {
  const hc1Scrollable = false;
  const hc1count = 2;
  const backgroundColor = "#ff0";
  return (
    <Container>
      <MobileContainer>
        <ScrollComponent>
          <HC3Card />
          <HC3Card />
          <HC3Card />
          <HC3Card />
          <HC3Card />
        </ScrollComponent>

        <ScrollComponent>
          <HC6Card />
          {/* <HC6Card />
          <HC6Card />
          <HC6Card />
          <HC6Card />
          <HC6Card /> */}
        </ScrollComponent>
        <ScrollComponent>
          <HC5Card />
          <HC5Card />

          <HC5Card />

          <HC5Card />
          <HC5Card />
        </ScrollComponent>

        <ScrollComponent>
          <HC9CardContainer />
          <HC9CardContainer />
          <HC9CardContainer />
          <HC9CardContainer />
          <HC9CardContainer /> <HC9CardContainer /> <HC9CardContainer />{" "}
          <HC9CardContainer /> <HC9CardContainer />
        </ScrollComponent>

        <ScrollComponent
          styles={css`
            ${!hc1Scrollable
              ? `
                display: grid;
                grid-template-columns: repeat(${hc1count}, ${100 / hc1count}%);
              `
              : ``}
            background-color: ${backgroundColor};
          `}
        >
          <HC1Card />
          <HC1Card />
          {/* <HC1Card />
          <HC1Card />
          <HC1Card /> */}
        </ScrollComponent>
      </MobileContainer>
    </Container>
  );
}

export default App;
