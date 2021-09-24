import { makeAutoObservable, flow } from "mobx";

const fetchUser = () => {
  return fetch("https://randomuser.me/api/").then((response) =>
    response.json()
  );
};

class RandomUser {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchRandomUser = flow(function* () {
    try {
      const response = yield fetchUser();
      if (response.results[0]) {
        // искусственная задержка, чтобы лоадер подольше показывать
        setTimeout(() => {
          this.user = response.results[0];
        }, 2000);
      }
    } catch (error) {
      throw new Error("Error to download info randomUser from api!");
    }
  });
}

const userStore = new RandomUser();
export { userStore };
