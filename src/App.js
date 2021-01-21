import React from "react";
import {
  Button,
  Image,
  Divider,
  Header,
  Icon,
  Label,
  Grid,
} from "semantic-ui-react";
import Comments from "./Comments";

import img1 from "./image/img1.jpg";

function App() {
  return (
    <div>
      <Grid centered>
        <Grid.Row>
          <Image src={img1} centered />
        </Grid.Row>
        <Grid.Row>
          <Button as="div" labelPosition="right">
            <Button color="red">
              <Icon name="heart" />
              Like
            </Button>
            <Label as="a" basic color="red" pointing="left">
              2,048
            </Label>
          </Button>
          <Button as="div" labelPosition="right">
            <Button basic color="blue">
              <Icon name="fork" />
              Fork
            </Button>
            <Label as="a" basic color="blue" pointing="left">
              2,048
            </Label>
          </Button>
        </Grid.Row>
      </Grid>

      <Divider horizontal>
        <Header as="h4">
          <Icon name="tag" />
          댓글을 달아주세요
        </Header>
      </Divider>

      <Comments />

      <Divider horizontal>
        <Header as="h4">
          <Icon name="tag" />
          Contact Me
        </Header>
      </Divider>

      <Grid centered>
        <Button color="facebook">
          <Icon name="facebook" /> Facebook
        </Button>
        <Button color="twitter">
          <Icon name="twitter" /> Twitter
        </Button>
        <Button color="instagram">
          <Icon name="instagram" /> Instagram
        </Button>
        <Button color="youtube">
          <Icon name="youtube" /> YouTube
        </Button>
      </Grid>
    </div>
  );
}

export default App;
