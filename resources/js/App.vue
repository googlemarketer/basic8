<template>
  <div id="app" v-cloak>
<h1 class="header"> Happywed</h1>
    <button
      class="header"
      @click="toggleEventCreation"
    >Event Creation</button>
      <button
        class="header"
        @click="toggleEventManger"
      >Manager Tools</button>
        <button
          class="header"
          @click="toggleWeddingVenues"
        >Wedding Venues</button>
          <button
            class="header"
            @click="toggleWeddingDirectory"
          >Directory</button>
            <button
              class="header"
              @click="toggleWeddingIdeas"
            >Wedding Ideas</button>

              <div
                class="eventCreation"
                v-show="eventCreation"
              >
                <p>
                  <button
                    class="wedBtn"
                    @click="togglePopup('invitationCover')"
                  >{{invitationCover ? 'close' : 'Create Invitation Cover'}}</button>
                    <WedPopup
                      v-show="invitationCover"
                      header="Create Invitation Cover"
                    ></WedPopup>
                </p>

                <p>
                  <button
                    class="wedBtn"
                    @click="togglePopup('saveDate')"
                  >{{saveDate ? 'close' : 'Create SaveTHEDate'}}</button>
                    <WedPopup
                      v-show="saveDate"
                      header="SaveDate"
                    ></WedPopup>
                </p>

                <p>
                  <button
                    class="wedBtn"
                    @click="togglePopup('coverStory')"
                  >{{coverStory ? 'close' : 'Create CoverStory' }}</button>
                    <WedPopup
                      v-show="coverStory"
                      header="Cover Story"
                    ></WedPopup>
                </p>

                <p>
                  <button
                    class="wedBtn"
                    @click="togglePopup('addCeramony')"
                  >{{addCeramony ? 'close' : 'Add Ceramoies'}}</button>
                    <WedPopup
                      v-show="addCeramony"
                      header="Ceramonies"
                    ></WedPopup>
                </p>

                <p>
                  <button
                    class="wedBtn"
                    @click="togglePopup('uploadGuest')"
                  >{{uploadGuest ? 'close' : 'Add Guests'}}</button>
                    <WedPopup
                      v-show="uploadGuest"
                      header="Guest List"
                    ></WedPopup>
                </p>

  </div>

  <div
    class="eventManger"
    v-show="eventManager"
  >
    <p>
      <button
        class="wedBtn"
        @click="togglePopup('venues')"
      >{{venues ? 'close' : 'Create Venue'}}</button>
        <WedPopup
          v-show="venues"
          header="Add Venue"
        ></WedPopup>
    </p>

    <p>
      <button
        class="wedBtn"
        @click="togglePopup('members')"
      >{{members ? 'close' : 'Members'}}</button>
        <WedPopup
          v-show="members"
          header="Members"
        ></WedPopup>
    </p>

    <p>
      <button
        class="wedBtn"
        @click="togglePopup('tasklist')"
      >{{tasklist ? 'close' : 'Task List' }}</button>
        <WedPopup
          v-show="tasklist"
          header="Task List"
        ></WedPopup>
    </p>

    <p>
      <button
        class="wedBtn"
        @click="togglePopup('logistics')"
      >{{logistics ? 'close' : 'Add Logistics'}}</button>
        <WedPopup
          v-show="logistics"
          header="Logistics"
        ></WedPopup>
    </p>

    <p>
      <button
        class="wedBtn"
        @click="togglePopup('accommodation')"
      >{{accommodation ? 'close' : 'Accommodation'}}</button>
        <WedPopup
          v-show="accommodation"
          header="Accommodation"
        ></WedPopup>
    </p>

    <p>
      <button
        class="wedBtn"
        @click="togglePopup('gallery')"
      >{{gallery ? 'close' : 'Gallery'}}</button>
        <WedPopup
          v-show="gallery"
          header="Gallery"
        ></WedPopup>
    </p>

     <p>
      <button
        class="wedBtn"
        @click="togglePopup('food')"
      >{{food ? 'close' : 'Food Department'}}</button>
        <WedPopup
          v-show="food"
          header="Food Department"
        ></WedPopup>
    </p>

 <p>
      <button
        class="wedBtn"
        @click="togglePopup('reports')"
      >{{reports ? 'close' : 'Reports'}}</button>
        <WedPopup
          v-show="reports"
          header="Reports"
        ></WedPopup>
    </p>


    </div>

    <div
      class="wedding-venues"
      v-show="weddingVenues"
    >
      <h1>Wedding Venues Structure</h1>
      </div>

      <div
        class="directory"
        v-show="weddingDirectory"
      >
        <h1>Directory</h1>
        </div>

        <div
          class="ideas"
          v-show="weddingIdeas"
        >
          <h1>Ideas & Inspiration</h1>
          </div>

          </div>
</template>

<script>
//import WedGreet from './components/Greet'

import WedPopup from "./components/WedPopup";
export default {
  name: "App",
  components: {
    WedPopup,
  },

  data() {
    return {
      eventCreation: false,
      eventManager: false,
      weddingDirectory: false,
      weddingVenues: false,
      weddingIdeas: false,
      invitationCover: false,
      saveDate: false,
      coverStory: false,
      addCeramony: false,
      uploadGuest: false,
      venues: false,
      members: false,
      tasklist: false,
      logistics: false,
      accommodation: false,
      gallery: false,
      food: false,
      reports: false
    };
  },
  methods: {
    closePopup(value) {
      this.showpopup = false;
      console.log(value);
    },
    toggleEventCreation() {
      this.eventCreation = !this.eventCreation;
      this.eventManager = false;
      this.weddingVenues = false;
      this.weddingDirectory = false;
      this.weddingIdeas = false;
    },
    toggleEventManger() {
      this.eventManager = !this.eventManager;
      this.eventCreation = false;
      this.weddingVenues = false;
      this.weddingDirectory = false;
      this.weddingIdeas = false;
    },
    toggleWeddingVenues() {
      this.weddingVenues = !this.weddingVenues;
      this.eventCreation = false;
      this.eventManager = false;
      this.weddingDirectory = false;
      this.weddingIdeas = false;
    },
    toggleWeddingDirectory() {
      this.weddingDirectory = !this.weddingDirectory;
      this.eventCreation = false;
      this.eventManager = false;
      this.weddingVenues = false;
      this.weddingIdeas = false;
    },
    toggleWeddingIdeas() {
      this.weddingIdeas = !this.weddingIdeas;
      this.eventCreation = false;
      this.eventManager = false;
      this.weddingVenues = false;
      this.weddingDirectory = false;
      
    },
    togglePopup(val) {
      console.log(val);
      switch (val) {
        case "invitationCover":
          this.invitationCover = !this.invitationCover;
          this.saveDate = false;
          this.coverStory = false;
          this.addCeramony = false;
          this.uploadGuest = false;
          break;

        case "saveDate":
          this.saveDate = !this.saveDate;
          this.invitationCover = false;
          this.coverStory = false;
          this.addCeramony = false;
          this.uploadGuest = false;
          break;

        case "coverStory":
          this.coverStory = !this.coverStory;
          this.invitationCover = false;
          this.saveDate = false;
          this.addCeramony = false;
          this.uploadGuest = false;
          break;

        case "addCeramony":
          this.addCeramony = !this.addCeramony;
          this.invitationCover = false;
          this.saveDate = false;
          this.coverStory = false;
          this.uploadGuest = false;
          break;

         case "uploadGuest":
          this.uploadGuest = !this.uploadGuest;
          this.invitationCover = false;
          this.saveDate = false;
          this.coverStory = false;
          this.addCeramony = false;
          break;

          case "venues":
          this.venues = !this.venues;
          this.members = false;
          this.tasklist = false;
          this.logistics = false;
          this.accommodation = false;
          this.gallery = false;
          this.food = false;
          this.reports = false;
          
          break;

          case "members":
          this.members = !this.members;
          this.venues = false;
          this.tasklist = false;
          this.logistics = false;
          this.accommodation = false;
          this.gallery = false;
          this.food = false;
          this.reports = false;
          break;

          case "tasklist":
          this.tasklist = !this.tasklist;
          this.venues = false;
          this.members = false;
          this.logistics = false;
          this.accommodation = false;
          this.gallery = false;
          this.food = false;
          this.reports = false;
          break;

          case "logistics":
          this.logistics = !this.logistics;
          this.venues = false;
          this.members = false;
          this.tasklist = false;
          this.accommodation = false;
          this.gallery = false;
          this.food = false;
          this.reports = false;
          break;

          case "accommodation":
          this.accommodation = !this.accommodation;
          this.venues = false;
          this.members = false;
          this.tasklist = false;
          this.logistics = false;
          this.gallery = false;
          this.food = false;
          this.reports = false;
          break;

          case "gallery":
          this.gallery = !this.gallery;
          this.venues = false;
          this.members = false;
          this.tasklist = false;
          this.logistics = false;
          this.accommodation = false;
          this.food = false;
          this.reports = false;
          break;

          case "food":
          this.food = !this.food;
          this.venues = false;
          this.members = false;
          this.tasklist = false;
          this.logistics = false;
          this.accommodation = false;
          this.gallery = false;
          this.reports = false;
          break;

          case "reports":
          this.reports = !this.reports;
          this.venues = false;
          this.members = false;
          this.tasklist = false;
          this.logistics = false;
          this.accommodation = false;
          this.gallery = false;
          this.food = false;          
          break;
      }
    },
  },
  computed: {},
  watch: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background-color: pink;
  margin-top: 60px;
}

[v-cloak] {
  display: none;
}

.header {
  margin: 5px;
  color: red;
  font-size: 32px;
  box-shadow: 4px 8px 12px 0 rgba(255, 0, 0, 0.3);
}

.wedBtn {
  display: block;
  width: 50%;
  padding: 1.5em;
  margin-left: 25%;
  box-shadow: 4px 8px 12px 0 rgba(255, 0, 0, 0.3);
}
</style>
