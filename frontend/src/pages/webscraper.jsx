import { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import * as cheerio from "cheerio";
import axios from "axios";
import * as fs from "fs";
import { questArray, questMap } from "../../scripts/quests";
import { Table } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Alert } from "reactstrap";
import { Badge } from "reactstrap";
import { Spinner } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function Webscraper() {
  const [rewards, setRewards] = useState([]);
  // async function fetchPage(url) {
  //   try {
  //     const response = await axios.get(url);
  //     return response.data;
  //   } catch (error) {
  //     console.error(`Error fetching page: ${error}`);
  //     return null;
  //   }
  // }

  // function scrapePage(html) {
  //   const $ = cheerio.load(html);
  //   const allRewards = $(
  //     "h2:nth-of-type(3) span.mw-headline, .mw-parser-output > div div.floatnone, .mw-parser-output ul:nth-of-type(2) li"
  //   )
  //     .map((index, element) => $(element).text())
  //     .get();
  //   return {
  //     allRewards,
  //   };
  // }

  // async function scrape(url) {
  //   const html = await fetchPage(url);
  //   if (html) {
  //     const rewards = scrapePage(html);
  //     setRewards(rewards.allRewards);
  //     return rewards.allRewards;
  //   }
  // }

  // useEffect(() => {
  //   const url = "https://oldschool.runescape.wiki/w/Animal_Magnetism";
  //   scrape(url);
  // }, []);

  return (
    <div>
      <h1>Web Scraper</h1>
      <p>
        Scrape the Old School Runescape Wiki for information on quests, items,
        and more!
      </p>
      {/* {rewards.length > 0 && rewards.map((reward) => <p key={Math.random() * 1000}>{reward}</p>)} */}
      {/* <Form>
        <FormGroup>
          <Label for="exampleEmail">URL</Label>
          <Input
            type="url"
            name="url"
            id="exampleEmail"
            placeholder="https://oldschool.runescape.wiki/w/Animal_Magnetism"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form> */}
      {/* <Table>
        <thead>
          <tr>
            <th>Rewards</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ul>
                {data.allRewards.map((reward) => (
                  <li>{reward}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </Table> */}
    </div>
  );
}
