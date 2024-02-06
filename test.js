.
input -
with-icon {
    position: relative;
}

.
input -
with-icon input[type = "text"]
{
    padding - left
:
    30
    px; /* Adjust this value based on the width of the icon */
}

.
input -
with-icon.fa - search {
    position: absolute;
    left: 10
    px; /* Adjust this value based on the desired position of the icon */
    top: 50 %;
    transform: translateY(-50 %);
}

<div className="input-with-icon">
    <input type="text" placeholder="Search..." style="width: 100%;" className="font-awesome-placeholder"/>
    <i className="fas fa-search"></i>
</div>
