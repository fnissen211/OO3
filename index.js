const app = Vue.createApp({
    data() {
        return {
            color1: 'beige',
            color2: 'bisque',
            color3: 'burlywood',
            color4: 'darkgray',
            color5: 'darksalmon',
            color6: 'khaki',
            isDropdownOpen: false,
            selectedInfoBox: 0
        }
    },
    methods: {
        ChangeBackgroundColor() {
            const colors = [this.color1, this.color2, this.color3, this.color4, this.color5, this.color6]
            const randomIndex = Math.floor(Math.random() * colors.length);
            return colors[randomIndex]
        },
        toggleDropdown() {
            if (this.isDropdownOpen) {
                this.isDropdownOpen = false;
            } else {
                this.isDropdownOpen = true;
            }
        },
        showInfoBox(infoBoxId) {
            this.selectedInfoBox = infoBoxId
        }
    }
}).mount("#app");