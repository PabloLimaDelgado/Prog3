import { FC, FormEvent, useState } from "react";
import { Button, Col, Form, Navbar, Row } from "react-bootstrap";
import { useAppDispatch } from "../../../hooks/redux.ts";
import { setGift } from "../../../redux/slices/gift.ts";

const API_KEY = import.meta.env.VITE_API_KEY;

export const NavBar = () => {
  const dispatch = useAppDispatch();

  const fetchGift = async (query: string) => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=12`
      );
      const data = await response.json();

      const parseData = data.data.map((element: any) => ({
        urlGift: element.images.fixed_height.url,
        title: element.title,
      }));

      dispatch(setGift(parseData));
    } catch (error) {
      console.warn(error);
    }
  };

  const [queryInput, setQueryInput] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchGift(queryInput);
  };

  return (
    <Navbar className="bg-body-tertiary justify-content-center">
      <Form onSubmit={submit}>
        <Row>
          <Col xs="auto">
            <Form.Control
              onChange={(e) => setQueryInput(e.target.value)}
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
};
