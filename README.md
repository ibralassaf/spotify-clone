<p align="center">

</p>
<h1 align="center">Spotify Clone 🟢🎶</h1>

<p align="center">
<a href="https://github.com/ibralassaf/spotify-clone/blob/master/LICENSE" target="blank">
<img src="https://img.shields.io/github/license/saviomartin/slickr?style=flat-square" alt="slickr licence" />
</a>
<a href="https://github.com/ibralassaf/spotify-clone/fork" target="blank">
<img src="https://img.shields.io/github/forks/ibralassaf/spotify-clone?style=flat-square" alt="slickr forks"/>
</a>
<a href="https://github.com/ibralassaf/spotify-clone/stargazers" target="blank">
<img src="https://img.shields.io/github/stars/ibralassaf/spotify-clone?style=flat-square" alt="slickr stars"/>
</a>
<a href="https://github.com/ibralassaf/spotify-clone/issues" target="blank">
<img src="https://img.shields.io/github/issues/ibralassaf/spotify-clone?style=flat-square" alt="slickr issues"/>
</a>
<a href="https://github.com/ibralassaf/spotify-clone/pulls" target="blank">
<img src="https://img.shields.io/github/issues-pr/ibralassaf/spotify-clone?style=flat-square" alt="slickr pull-requests"/>
</a>

</p>

<p align="center"><img src="/public/spotify-clone-gif.gif" alt="spotify-clone gif" width="550" /></p>

<p align="center">
    <a href="https://spotify-clone.ibas.dev/">View Demo</a>
    ·
    <a href="https://github.com/ibralassaf/spotify-clone/issues/new/choose">Report Bug</a>
    ·
    <a href="https://github.com/ibralassaf/spotify-clone/issues/new/choose">Request Feature</a>
</p>

> **Warning**
> The demo is using my own API so you can't access from the url, clone it and put your own API

### Introducing Spotify Clone ✌️

Spotify Clone is built using some interesting tech stack that I learned a lot from it I clone Spotify and mimic the design, and created the functionality such as playing the song, stopping, volume up and down, fetching the playlist, and fetching the songs with the details such as image and title duration, etc, and authenticated using oAuth JWT access/refresh tokens and NextAuth applied a lot of principles such as Debouncing in the volume and Recoil for the state and created a custom hook for Spotify

## 💻 Tech Stack Used

> "Spotify Clone" built with modern tech stack, Here're some of it .

- ⚙️ **Nextjs 12** (Back-end and routing)
- ⚙️ **React** (Front-end)
- 💡**Debounce** (Prevent spamming)
- 💡**Middleware** (Checks all the requests if you authenticated)
- 📦 **Tailwind CSS** (Styling)
- 📦 **Spotify API** (Fetch playlists, songs, etc)
- 📦 **oAuth JWT** (Access/refresh tokens)
- 📦 **NextAuth** (Spotify Auth)
- 📦 **Recoil** (State management)
- 📦 **heroicons** (Icons)
- 📦 **lodash** (Utility functions)
- 💡 **Custom hook** (Spotify Hook)

You can discover the rest yourself ✨️

## 🛠️ Installation Steps

1. Clone the repository

```bash
git clone https://github.com/ibralassaf/spotify-clone.git
```

2. Change the working directory

```bash
cd spotify-clone
```

3. Install dependencies

```bash
npm install
```

4. Create `.env` file in root and add your variables

```bash
NEXTAUTH_URL=ADD http://localhost:3000 for LOCAL OR YOUR URL
NEXT_PUBLIC_CLIENT_SECRET=FROM SPOTIFY DASHBOARD
NEXT_PUBLIC_CLIENT_ID=FROM SPOTIFY DASHBOARD
JWT_SECRET=ANY SECRET VALUE
```

5. Run the app

```bash
npm start
```

---

> **Note**
> You have to get your own spotify credentials

- **Visit https://link.ibas.dev/spotifyapi**
- **Create project and get your credential**
  <br/>
  <img src="https://support.heateor.com/wp-content/uploads/2020/10/spotify-client-id.png" alt="spotify api showcase">
  <br/>
- **Edit settings and add the callback URL**

  <img src="https://i.imgur.com/R7M9NLC.png" alt="edit settings">
  <br/>

  > You are all set! Open [localhost:3000](http://localhost:3000/) to see the app.

## 🍰 Contributing

- Feel free to contribute and put your touch. Create a branch, add commits, and [open a pull request](https://github.com/ibralassaf/spotify-clone/compare).

## 🛡️ License

- This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.

## 👨‍💻 Author

### 👤 Ibrahim Alassaf

- Twitter: [@Ibralassaf](https://twitter.com/Ibralassaf)
- Github: [@Ibralassaf](https://github.com/Ibralassaf)

---

<h3 align="center">
Thanks for reading ⭐️
</h3>
