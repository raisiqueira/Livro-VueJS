<template>
    <div v-on:click="OnMenuClick">
        <h4>{{title}}</h4>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>

export default {
    props: ['title'],
    methods: {
        OnMenuClick: function() {
            this.$emit('menu-click')
        }
    }
}

</script>