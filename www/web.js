Vue.component("modal", {
    template: "#modal-template",
    methods: {
        emitClose() {
            this.$emit('close');
        },
    }
});

new Vue({
    el: "#app",
    data() {
        return {
            showModal: false
        }
    },
    methods: {
        open() {
            this.showModal = true;
            this.scan();
        },
        close() {
            this.showModal = false;
            window.$scanditService.stopScan();
        },
        scan() {
            window.$scanditService.startScan();
        },
        goToPage() {
            this.close();
            window.location.assign('/about.html');
        }
    }
});