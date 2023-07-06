<!-- Replacing the setup() Method
Adding a setup() method to the exported object (as shown in the previous) section can get annoying if you're using the composition API in many components. Especially since you also need to add export default { ... } and return any values that should be available in the <template> of the component.

Vue.js offers an alternative syntax: You can use <script setup> instead of manually adding a setup() method.

The following code:

<script>
import { ref } from 'vue';
 
export default {
  setup() {
    const uName = ref('Maximilian');
 
    setTimeout(function() {
      uName.value = 'Max';
    }, 2000);
 
    return { uName };
  }
}
</script>
could be replaced with:

<script setup>
import { ref } from 'vue';
 
const uName = ref('Maximilian');
 
setTimeout(function() {
  uName.value = 'Max';
}, 2000);
</script>
You can learn more about <script setup> here.

Both syntaxes can be used and you can simply go with your personal favorite. This course was recorded before <script setup> was added, hence I use the setup() method throughout this course. All Vue and Composition API concepts apply either way though. Therefore, what you learn in this course still works in the same way, no matter if you're using <script setup> or the setup() method. -->