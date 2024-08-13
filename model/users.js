const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

exports.User = mongoose.model('User', userSchema);


String generateXpathFromElement(WebElement element) {
    String tagName = element.getTagName()
    String className = element.getAttribute('class')
    String textContent = element.getText()
    
    String xpath = "//" + tagName

    // Add class attribute if present
    if (className != null && !className.isEmpty()) {
        xpath += "[@class='" + className + "']"
    }

    // Add text content if present
    if (textContent != null && !textContent.isEmpty()) {
        xpath += "[text()='" + textContent + "']"
    }

    return xpath
}