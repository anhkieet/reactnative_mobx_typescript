/**
 * @format
 */

import {} from "reflect-metadata";
import moment from "moment";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

console.disableYellowBox = true;

moment.locale("en-au");

AppRegistry.registerComponent(appName, () => App);
