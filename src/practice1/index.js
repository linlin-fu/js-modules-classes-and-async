import * as aws from "./constant";
import getURL from "./utils";

const url = getURL(aws.ADDRESS, aws.PATH, aws.PORT);
const region = aws.REGION;

export { url, region };
