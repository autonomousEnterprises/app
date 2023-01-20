import { reactive } from 'vue'
import { defineStore } from "pinia";
import Eco from "../utils/eco";

export const eco = reactive(new Eco())
