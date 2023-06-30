import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x639674F618B1740604a2d41Dfa577aF61b7862cc"
);

export default instance;
