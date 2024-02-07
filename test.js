.input-container {
    display: flex;
    position: relative;
    justify-content: space-between;
}

.input-field-wrapper {
    position: relative;
    width: 100%;
}

.input-field {
    padding-right: 40px; /* Adjusted padding to make space for the close button */
    width: calc(100% - 40px); /* Adjusted width to accommodate close button */
    height: 2rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

.icon-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    display: flex;
    align-items: center;
}

.input-icon {
    margin-right: 10px; /* Adjusted margin for better spacing */
}

.input-icon-close {
    cursor: pointer;
}

/* Make input field responsive */
@media screen and (max-width: 768px) {
.input-field {
        width: calc(100% - 50px); /* Adjusted width for smaller screens */
        padding-right: 50px; /* Adjusted padding for smaller screens */
    }
}
