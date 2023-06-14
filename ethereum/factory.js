import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x4F02F973709b6E45D87D44A1Df980fC81fb1BBEe"
);

export default instance;
