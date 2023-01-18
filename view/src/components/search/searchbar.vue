<template>
  <div class="container">
    <div class="text">
        <svg role="img" class="search-icon" width="18" height="18" viewBox="0 0 22 22">
            <g transform="translate(2.000000, 2.000000)" stroke="#999" stroke-width="1.5" fill="none">
                <circle cx="7" cy="7" r="7"></circle>
                <path d="M12,13 L17,18" stroke-linecap="square"></path>
            </g>
        </svg>
        <input type="text" placeholder="Search">
    </div>
    <div class="toggle"></div>
  </div>
</template>

<style scoped>
* {
    box-sizing: inherit;
}
.container {
    display: flex;
    justify-content: space-between;
}
.text {
    box-sizing: border-box;
    display: inline-block;
}
.search-icon {
    margin: 0 12px;
    position: absolute;
    font-size: 17px;
    height: 44px;
}
input {
    border: 1px transparent;
    border-radius: 15px;
    background-color: #ddd;
    height: 44px;
    width: 300px;
    padding: 8px 12px;
    padding-left: 36px;
    font-size: 18px;
}
input::placeholder {
    color: #999;
}
.toggle {
    background-color: red;
    height: 44px;
    width: 50px;
    display: inline-block;
}
</style>