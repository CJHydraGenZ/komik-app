import axios from "axios";
// import cheerio from "cheerio";
import * as cheerio from "cheerio";
import { fetcherAPI } from "components/function/fetch";
import { HandleKomikList } from "components/function/scraping";
import { HandleListPage } from "components/function/scraping_komikid";



export default async function handler(req, res) {

  switch (req.method) {
    case "GET":
    // console.log(element);
    // return res.status(200).json(await HandleKomikList(url));
    // return res.status(200).json(await HandleListPage(1))

    case "POST":
    // return res.status(200).json(await HandleKomikList(url));

    default:
      return res.status(200).json({
        status: true,
        message: "success",
        komik_list,
      });
  }
}