import React from "react";
import {
  Button,
  Comment,
  Form,
  Grid,
  Header,
  Icon,
  Label,
} from "semantic-ui-react";
import avatar1 from "./image/avatar1.svg";
import avatar2 from "./image/avatar2.svg";
import avatar3 from "./image/avatar3.svg";
import avatar4 from "./image/avatar4.svg";

function SingleConment(detail) {
  return (
    <Comment>
      <Comment.Avatar src={avatar1} />
      <Comment.Content>
        <Comment.Author as="a">Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>{detail.content}</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
}

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      inputContent: "",
      comentList: [],
    };
  }
  render() {
    console.log(this.state.comentList);
    return (
      <Comment.Group style={{ marginLeft: "500px" }}>
        <Header as="h3" dividing>
          Comments
        </Header>

        {this.state.comentList.map((comments) => (
          <SingleConment content={comments} />
        ))}

        <Comment>
          <Comment.Avatar src={avatar2} />
          <Comment.Content>
            <Comment.Author as="a">Elliot Fu</Comment.Author>
            <Comment.Metadata>
              <div>Yesterday at 12:30AM</div>
            </Comment.Metadata>
            <Comment.Text>
              <p>This has been very useful for my research. Thanks as well!</p>
            </Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
          <Comment.Group>
            <Comment>
              <Comment.Avatar src={avatar3} />
              <Comment.Content>
                <Comment.Author as="a">Jenny Hess</Comment.Author>
                <Comment.Metadata>
                  <div>Just now</div>
                </Comment.Metadata>
                <Comment.Text>Elliot you are always so right :)</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Comment>

        <Comment>
          <Comment.Avatar src={avatar4} />
          <Comment.Content>
            <Comment.Author as="a">Joe Henderson</Comment.Author>
            <Comment.Metadata>
              <div>5 days ago</div>
            </Comment.Metadata>
            <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>

        <Form reply>
          <Form.TextArea
            value={this.state.inputContent}
            placeholder="댓글을 입력해주세요"
            onChange={(e) => this.setState({ inputContent: e.target.value })}
          />
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
            onClick={() =>
              this.setState((prevState) => {
                return {
                  comentList: [
                    ...prevState.comentList,
                    this.state.inputContent,
                  ],
                };
              })
            }
          />
        </Form>
      </Comment.Group>
    );
  }
}

export default Comments;
