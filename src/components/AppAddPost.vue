<template>
   <div class="container jumbotron">
    <form class="mx-auto" style="max-width: 500px;" v-on:submit.prevent="submit">
        <input class="col-6 form-control mb-3" v-model="post.title" type="text" required="required" minlength="2" placeholder="Title">
        <textarea class="col-6 form-control mb-3" v-model="post.text" rows="12" required="required" maxlength="300" placeholder="Content"></textarea>

        <div class="d-flex flex-row justify-content-center">
            <button class="col-3 btn btn-secondary me-2" type="button" @click="reset">Reset</button>
            <button class="col-3 btn btn-warning ms-2" type="submit">Submit</button>
        </div>
        </form>
  </div>
</template>

<script>
import Posts from '../services/Posts.js';

export default {
  name: 'AddPost',
  props: ['id'],

  data() {
    return {
      post: {
        title: '',
        text: ''
      }
    }
  },

    created() {
        this.get();
    },

  methods: {
    async add() {
      try {
        await Posts.add(this.post);
        this.$router.push({ name: 'Posts' });
      } catch(err) {
        console.log(err);
      }
    },

    reset() {
      this.post = {
        title: '',
        text: ''
      }
    },

    async get() {
      if (this.isEditMode) {
        try {
          this.post = await Posts.get(this.id);
        } catch(err) {
          console.log(err);
          this.reset();
        }
      } else {
        this.reset();
      }
    },

    async edit() {
      try {
        await Posts.edit(this.post);
        this.$router.push({ name: 'Post', params: { id: this.post.id} });
      } catch(err) {
        console.log(err);
      }
    },

    submit() {
      if (this.editMode) {
        this.edit();
      } else {
        this.add();
      }
    },

    computed: {
        isEditMode() {
        return !!this.id;
        }
    }

  }
}
</script>

<style>
</style>