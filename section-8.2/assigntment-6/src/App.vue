<template>
  <section>
    <header>
      <h1>Active Users</h1>
    </header>
    <add-user-data @add-user="addUser"></add-user-data>
    <ul>
      <li>
        <active-user
          v-for="user in activeUsers"
          :key="user.id"
          :id="user.id"
          :username="user.username"
          :age="user.age"
        ></active-user>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeUsers: [{}],
    };
  },
  methods: {
    addUser(username, age) {
      const adduser = {
        id: new Date().toISOString(),
        username: username,
        age: age,
      };
      this.activeUsers.push(adduser);
    },
  },
};
</script>
