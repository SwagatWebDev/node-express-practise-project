<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
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
</style>
</head>
<body>

<div class="input-container">
    <input type="text" class="input-field" placeholder="Search...">
        <i class="fas fa-search input-icon"></i>
</div>

</body>
</html>
