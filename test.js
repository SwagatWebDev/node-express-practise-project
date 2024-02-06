<div className="input-container">
    <input type="text" className="input-field" placeholder="Search..."/>
    <em className="fas fa-search input-icon"></em>
</div>

.input-container {
    position: relative;
    width: 300px;
}

.input-field {
    padding-left: 30px;
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    box-sizing: border-box;
}

.input-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
}
