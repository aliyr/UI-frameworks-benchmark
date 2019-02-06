<template>
  <div class="main">
    <input
      type="checkbox"
      :checked="checked"
      @change="$emit('change', $event.target.checked)"
      id="checkbox"
      style="display: none"
    >
    <label class='checkbox-container' :class="{ 'active-label': checked }" for="checkbox">
      <div class='checkbox-tag-container'>
        <div class='checkbox'></div>
      </div>
      <div class='label'>
        <div class='label-content'>
          <slot></slot>
        </div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  }
}
</script>

<style scoped>
  .main{
    text-align: center;
    display: inline-block;
  }
  .checkbox-container{
    display: flex;
    position: relative;
    height: auto;
  }

  .checkbox{
    width: 50px;
    height: 50px;
    border: 1px solid #000;
    position: relative;

  }

  .label{
    position: relative;
    height: auto;
    margin-left: 10px;
  }

  .label .label-content{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .active-label .checkbox{
    background-color: aqua;
  }

</style>
