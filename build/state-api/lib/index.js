"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

class StateApi {
  constructor({ data, i18n }) {
    this.getState = () => {
      return this.data;
    };

    this.isAuthenticated = () => {
      return this.authenticated;
    };

    this.authenticate = async (username, password) => {
      return await Q.fcall(() => {
        return true;
      });
    };

    this.subscribe = cb => {
      this.lastSubscriptionId++;
      this.subscriptions[this.lastSubscriptionId] = cb;
      return this.lastSubscriptionId;
    };

    this.unsubscribe = subscriptionId => {
      delete this.subscriptions[subscriptionId];
    };

    this.notifySubscribers = () => {
      Object.values(this.subscriptions).forEach(cb => cb());
    };

    this.mergeWithState = stateChange => {
      this.data = _extends({}, this.data, stateChange);
      this.notifySubscribers();
    };

    this.setSearchTerm = searchTerm => {
      this.mergeWithState({
        searchTerm
      });
    };

    this.authenticated = false;
    this.data = {
      flows: data.flows,
      i18n
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
}

exports.default = StateApi;