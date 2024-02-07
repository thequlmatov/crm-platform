<template>
  <main id="room-page">
    <div class="main-container">
      <h1>List of rooms </h1>
      <div class="room-header">
        <div class="custom_input">
          <input v-model="searchQuery" class="input" type="text" placeholder="Search room...">
          <svg xmlns="http://www.w3.org/2000/svg" class="svg_icon bi-search" viewBox="0 0 16 16">
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
            </path>
          </svg>
        </div>
        <button class="addBtn" @click="openModal">Add</button>
      </div>

      <div class="rooms">
        <div v-for="(room, index) in filteredRooms" :key="index" class="rooms-item">
          <div class="rooms-item__title">
            <h2>{{ room.name }}</h2>
            <img src="../img/rooms-icon.png" alt="rooms pencil img" @click="editRoom(index)">
          </div>
          <p>{{ room.students }}</p>

        </div>
      </div>
    </div>

    <div class="room-change__modal">
      <div v-if="isModalOpen" class="add-rooms">
        <div class="add-room__header">
          <h2>New Room</h2>
          <span class="close" @click="closeModal">&times;</span>
        </div>
        <form @submit.prevent="addRoom">
          <input v-model="newRoom.name" type="text" placeholder="Room name" required>
          <input v-model="newRoom.students" type="text" placeholder="Student numbers" required>
          <button class="addBtn" type="submit">Add</button>
        </form>
      </div>
      <div v-if="isModalOpen" class="edit-rooms">
        <h2>Edit Room</h2>
        <form @submit.prevent="saveEditedRoom">
          <input v-model="editedRoom.name" type="text" placeholder="Room name" required>
          <input v-model="editedRoom.students" type="text" placeholder="Student numbers" required>
					<button class="deleteBtn" @click="deleteRoom(index)">Delete</button>
          <button class="addBtn"  type="submit">Save</button>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
      rooms: JSON.parse(localStorage.getItem('rooms')) || [
        { name: 'Room1', students: 'Designed for 12 students' },
      ],
      newRoom: { name: '', students: '' },
      editedRoom: { name: '', students: '', index: -1 },
      searchQuery: '',
    };
  },
  computed: {
    filteredRooms() {
      const query = this.searchQuery.toLowerCase();
      return this.rooms.filter(room => room.name.toLowerCase().includes(query));
    },
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    addRoom() {
      this.rooms.push({ ...this.newRoom });
      this.saveRoomsToLocalStorage();
      this.closeModal();
    },
    editRoom(index) {
      this.editedRoom = { ...this.rooms[index], index };
      this.isModalOpen = true;
    },
    saveEditedRoom() {
      this.$set(this.rooms, this.editedRoom.index, { ...this.editedRoom });
      this.saveRoomsToLocalStorage();
      this.closeModal();
    },
    deleteRoom(index) {
      this.rooms.splice(index, 1);
      this.saveRoomsToLocalStorage();
    },
    saveRoomsToLocalStorage() {
      localStorage.setItem('rooms', JSON.stringify(this.rooms));
    },
  },
};
</script>

<style lang="scss">
// Boshqa stil tuzatmalar...
</style>


<style lang="scss">
// Boshqa stil tuzatmalar...
.deleteBtn {
  background-color: #FF6B6B;
  border: 0;
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  color: #fff;
}

.deleteBtn:hover {
  background-color: #E33E3E;
}

.addBtn {
			background-color: #E8AD77;
			border: 0;
			padding: 10px 15px;
			border-radius: 5px;
		}
#room-page {
	padding: 30px;
	-webkit-box-shadow: 5px 13px 33px -4px rgba(34, 60, 80, 0.24);
	-moz-box-shadow: 5px 13px 33px -4px rgba(34, 60, 80, 0.24);
	box-shadow: 5px 13px 33px -4px rgba(34, 60, 80, 0.24);
	margin: 25px;
	border-radius: 10px;
	width: 100%;
	display: flex;
	.main-container {
		width: 100%;
	}
	h1 {
		color: #999999;
		margin-bottom: 20px;
	}

	.room-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 30px;
	}

	.custom_input {
	display: flex;
	align-items: center;
	position: relative;
	max-width: 100%;
}

.input {
	font-size: 18px;
	padding: 5px 10px;
	width: 300px;
	padding-left: 35px;
	outline: none;
	background: #FFFFFF;
	color: #000000;
	border: 1px solid #C4D1EB;
	border-radius: 5px;
	box-shadow: 3px 3px 2px 0px #E2E2E2;
	transition: .3s ease;
}

.input:focus {
	background: #F2F2F2;
	border: 1px solid #5A7EC7;
	border-radius: 10px;
}

.input::placeholder {
	color: #DDDDDD;
}

.svg_icon {
	position: absolute;
	left: 10px;
	fill: #4660DC;
	width: 18px;
	height: 18px;
}
// room modal
.room-change__modal {
	padding: 20px;
	-webkit-box-shadow: -18px -2px 4px -14px rgba(34, 60, 80, 0.2);
	-moz-box-shadow: -18px -2px 4px -14px rgba(34, 60, 80, 0.2);
	box-shadow: -18px -2px 4px -14px rgba(34, 60, 80, 0.2);
	margin-left: 20px;
	.add-room__header {
		display: flex;
		justify-content: space-between;
		align-items: start	;
	}
	h2 {
		color: #999999;
		font-size: 28px;
		margin-bottom: 20px;
	}
	input {
		padding: 20px 10px;
		width: 300px;
		padding-left: 35px;
		outline: none;
		background: #EEEEEE;
		color: #000000;
		border: 1px solid #C4D1EB;
		border-radius: 5px;
		box-shadow: 3px 3px 2px 0px #E2E2E2;
		transition: .3s ease;
		margin-bottom: 20px;
		display: block;
	}

	input:focus {
	background: #F2F2F2;
	border: 1px solid #5A7EC7;
	border-radius: 10px;
}
	button {
		margin-left: 250px;
		margin-bottom: 20px;
	}
}

}

.rooms {
	display: grid;

	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-template-rows: repeat(4, 1fr);
	grid-column-gap: 15px;
	grid-row-gap: 34px;
	&-item {
		background-color: #F5F5F5;
		border-radius: 10px;
		padding: 20px;
	&__title {
		display: flex;
		justify-content: space-between;
		align-items: start;
		h2 {
			font-size: 18px;
			font-weight: bold;
			margin-bottom: 10px;
		}
	}
	p {
		font-size: 12px;
		color: #999999;
		font-weight: bold;
	}
}
}

</style>
