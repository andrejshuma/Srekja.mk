// ova e json file so site menu items, pls ako neso menjas pisi mi - Gavro
const menu_items = [
    {
      'id': 1,
      "name": "Custom Omelet",
      "macedonian_name": "ОМЛЕТ ПО ИЗБОР",
      "details": "Customizable omelet with three eggs and ham.",
      "ingredients": ["eggs", "ham", "cheese", "yellow cheese"],
      "ingredients-mk": ["јајца", "шунка", "кашкавал / сирење"],
      "tags": ["breakfast", "customizable"],
      "hasSideDish": false,
      "sideDishes": [],
      "spiceLevel": "none",
      "customize-options": ["pepperoni", "bacon", "mushrooms", "mozzarella", "pepper"],
      "price": 170
    },
    {
      'id': 2,
      "name": "Bagel with Eggs",
      "macedonian_name": "ЃЕВРЕК СО ЈАЈЦА",
      "details": "Bagel with eggs, cheese, and fresh vegetables.",
      "ingredients": ["eggs", "bagel", "cheese", "tomato", "cucumber"],
      "ingredients-mk": ["јајца", "ѓеврек", "сирење", "домат", "краставица"],
      "tags": ["breakfast"],
      "hasSideDish": false,
      "sideDishes": [],
      "spiceLevel": "none",
      "customize-options": [],
      "price": 160
    },
    {
      'id': 3,
      "name": "Club Sandwich",
      "macedonian_name": "КЛУБ СЕНДВИЧ",
      "details": "Club sandwich with ham, pepperoni, cheese, and fries.",
      "ingredients": ["toast bread", "sour cream with dill", "yellow cheese", "ham", "kulen", "lettuce", "tomato", "fries"],
      "ingredients-mk": ["тост леб", "павлака со копар", "кашкавал", "шунка", "кулен", "зелена салата", "домат", "помфрит"],
      "tags": ["sandwich", "breakfast"],
      "hasSideDish": false,
      "sideDishes": [],
      "spiceLevel": "mild",
      "customize-options": [],
      "price": 230
    },
    {
      'id': 4,
      "name": "Classic Toast",
      "macedonian_name": "ТОСТ КЛАСИК",
      "details": "Classic toast with ham, cheese, and sour cream with dill.",
      "ingredients": ["toast bread", "ham", "yellow cheese", "sour cream with dill"],
      "ingredients-mk": ["тост леб", "шунка", "кашкавал", "павлака со копар"],
      "tags": ["toast", "breakfast"],
      "hasSideDish": false,
      "sideDishes": [],
      "spiceLevel": "none",
      "customize-options": [],
      "price": 200
    },
    {
      'id': 5,
      "name": "Sreḱa Toast",
      "macedonian_name": "ТОСТ СРЕЌА",
      "details": "Special 'Sreḱa' toast with kulen, mozzarella, pesto, and arugula.",
      "ingredients": ["toast bread", "kulen", "mozzarella", "pesto", "arugula", "sun-dried tomato"],
      "ingredients-mk": ["тост леб", "кулен", "моцарела", "песто", "рукола", "сушен домат"],
      "tags": ["toast", "breakfast", "store-brand"],
      "hasSideDish": false,
      "sideDishes": [],
      "spiceLevel": "mild",
      "customize-options": [],
      "price": 230
    },
    {
      'id': 6,
      "name": "Vegetarian Sandwich",
      "macedonian_name": "ВЕГЕТАРИЈАНСКИ СЕНДВИЧ",
      "details": "Vegetarian sandwich with sesame bread, guacamole, and mixed vegetables.",
      "ingredients": ["homemade sesame bread", "guacamole", "mixed vegetables (pepper, cucumber, zucchini, tomato, olive, onion)","cheese"],
      "ingredients-mk": ["домашно сусам лебче", "гвакамоле", "мешано зеленчук (пиперка, краставица, тиквичка, домат, маслинка, кромид)", "кашкавал"],
      "tags": ["sandwich", "vegetarian"],
      "hasSideDish": false,
      "sideDishes": [],
      "spiceLevel": "none",
      "customize-options": [],
      "price": 200
    },
    {
      'id': 7,
      "name": "Chicken Sandwich",
      "macedonian_name": "ПИЛЕШКИ СЕНДВИЧ",
      "details": "Chicken sandwich with mayonnaise, lettuce, tomato, and Edam cheese.",
      "ingredients": ["mayonnaise", "lettuce", "tomato", "chicken fillet", "Edam cheese"],
      "ingredients-mk": ["пилешки стек", "мајонез", "зелена салата", "домат", "ајдамер"],
      "tags": ["sandwich"],
      "hasSideDish": false,
      "sideDishes": [],
      "spiceLevel": "none",
      "customize-options": [],
      "price": 210
    },
    {
      'id': 8,
      "name": "Chicken Fingers",
      "macedonian_name": "ПИЛЕШКИ ПРСТИ",
      "details": "Crispy chicken fillet with breadcrumbs and a dressing, served with ribbed fries.",
      "ingredients": ["chicken fillet", "breadcrumbs", "dressing", "ribbed fries"],
      "ingredients-mk": ["пилешки стек", "презла", "дресинг", "ребраст помфрит"],
      "tags": [],
      "hasSideDish": true,
      "sideDishes": ["ribbed fries"],
      "spiceLevel": "none",
      "customize-options": [],
      "price": 280
    },
    {
      'id': 9,
      "name": "Chicken Wings",
      "macedonian_name": "ПИЛЕШКИ КРИЛЦА",
      "details": "Chicken wings with a flavorful sauce consisting of ketchup, cumin, chili, honey, mustard, and pepper.",
      "ingredients": ["chicken wings", "sauce (ketchup, cumin, chili, honey, mustard, pepper)", "oil"],
      "ingredients-mk": ["пилешки крилца", "сос (кечап, ким, чили, мед, сенф, бибер)", "масло"],
      "tags": [],
      "hasSideDish": false,
      "sideDishes": [],
      "spiceLevel": "mild",
      "customize-options": [],
      "price": 0
    },
    {
      'id': 10,
      "name": "Fries",
      "macedonian_name": "ПОМФРИТ",
      "details": "A mix of ribbed and bakery fries.",
      "ingredients": ["ribbed fries", "bakery fries"],
      "ingredients-mk": ["ребраст помфрит", "пекарски помфрит"],
      "tags": [],
      "hasSideDish": false,
      "sideDishes": [],
      "spiceLevel": "none",
      "customize-options": [],
      "price": 260
    },
    {
      'id': 11,
      "name": "Nachos",
      "macedonian_name": "НАЧОС",
      "details": "Nachos with Edam cheese, mozzarella, cheddar, guacamole sauce, and salsa sauce.",
      "ingredients": ["nachos", "Edam cheese", "mozzarella", "cheddar", "guacamole sauce", "salsa sauce"],
      "ingredients-mk": ["начос", "ајдамер", "моцарела", "чедар", "гвакамоле сос", "салса сос"],
      "tags": [],
      "hasSideDish": false,
      "sideDishes": [],
      "spiceLevel": "mild",
      "customize-options": [],
      "price": 310
    },
    {
      'id': 12,
      "name": "Caesar Salad",
      "macedonian_name": "ЦЕЗАР САЛАТА",
      "details": "Classic Caesar salad with lettuce, corn, croutons, chicken fillet, cherry tomatoes, Parmesan, and dressing.",
      "ingredients": ["lettuce", "corn", "croutons", "chicken fillet", "cherry tomatoes", "Parmesan", "dressing"],
      "ingredients-mk": ["марула", "пченка", "кубети", "пилешки стек", "шери домати", "пармезан", "дресинг"],
      "tags": ["salad"],
      "hasSideDish": false,
      "sideDishes": [],
      "spiceLevel": "none",
      "customize-options": [],
      "price": 270
    },
    {
      'id': 13,
      "name": "Sreḱa Salad",
      "macedonian_name": "СРЕЌА САЛАТА",
      "details": "Sreḱa salad with iceberg, arugula, carrot, Indian walnuts, dried cranberries, bacon, gorgonzola, and a balsamic dressing.",
      "ingredients": ["iceberg lettuce", "arugula", "carrot", "Indian walnuts", "dried cranberries", "bacon", "gorgonzola", "dressing", "balsamic cream"],
      "ingredients-mk": ["ајсберг", "рукола", "морков", "индиски ореви", "сува брусница", "сланина", "горгонзола", "дресинг", "балзамико крема"],
      "tags": ["salad", "customizable"],
      "hasSideDish": false,
      "sideDishes": [],
      "spiceLevel": "none",
      "customize-options": ["iceberg lettuce", "arugula", "carrot", "Indian walnuts", "dried cranberries", "bacon", "gorgonzola", "dressing", "balsamic cream"],
      "price": 280
    },
    {
      'id': 14,
      "name": "Chicken in Peanut Sauce",
      "macedonian_name": "ПИЛЕШКО ВО КИКИРИКИ СОС",
      "details": "Chicken fillet served with peanut butter sauce, peanuts, and bakery fries.",
      "ingredients": ["chicken fillet", "peanut butter", "peanuts", "cream", "bakery fries"],
      "ingredients-mk": ["пилешки стек", "путер од кикирики", "кикирики", "хопла", "пекарски помфрит"],
      "tags": [],
      "hasSideDish": true,
      "sideDishes": ["bakery fries"],
      "spiceLevel": "mild",
      "customize-options": [],
      "price": 310
    },
    {
      'id': 15,
      "name": "Chicken in 4 Types of Cheese",
      "macedonian_name": "ПИЛЕШКО ВО 4 ВИДА СИРЕЊЕ",
      "details": "Chicken fillet served with mozzarella, gorgonzola, cheddar, and Edam cheese, with bakery fries.",
      "ingredients": ["chicken fillet", "mozzarella", "gorgonzola", "cheddar", "Edam cheese", "cream", "bakery fries"],
      "ingredients-mk": ["пилешки стек", "моцарела", "горгонзола", "чедар", "едамер", "павлака", "пекарски помфрит"],
      "tags": [],
      "hasSideDish": true,
      "sideDishes": ["bakery fries"],
      "spiceLevel": "none",
      "customize-options": [],
      "price": 330
    },
    {
      'id': 16,
      "name": "Sreḱa Burger",
      "macedonian_name": "СРЕЌА БУРГЕР",
      "details": "Sreḱa Burger with 100% beef patty, cheddar, caramelized onion, bacon, and a side of bakery fries.",
      "ingredients": ["burger bun", "beef patty", "iceberg lettuce", "cheddar", "caramelized onion", "bacon", "burger sauce", "pickles", "bakery fries"],
      "ingredients-mk": ["бургер лебче", "пилешки стек", "ајсберг", "чедар кашкавал", "карамелизиран кромид", "сланина", "бургер сос", "кисели краставички", "пекарски помфрит"],
      "tags": ["burger", "customizable"],
      "hasSideDish": true,
      "sideDishes": ["bakery fries"],
      "spiceLevel": "mild",
      "customize-options": ["beef patty", "cheddar", "caramelized onion", "bacon", "burger sauce", "pickles", "bakery fries"],
      "price": 350
    },
    {
      'id': 17,
      "name": "Vegan Garden Gourmet Burger",
      "macedonian_name": "ВЕГАНСКИ GARDEN GOURMET БУРГЕР",
      "details": "Vegan Garden Gourmet burger with mustard, lettuce, tomato, red onion, pickles, and fries.",
      "ingredients": ["burger bun", "Vegan Garden Gourmet patty", "mustard", "lettuce", "tomato", "red onion", "pickles", "fries"],
      "ingredients-mk": ["бургер лебче", "вегански Garden Gourmet плескавица", "сенф", "марула", "домат", "црвен кромид", "кисели краставички", "помфрит"],
      "tags": ["burger", "vegan"],
      "hasSideDish": true,
      "sideDishes": ["fries"],
      "spiceLevel": "none",
      "customize-options": [],
      "price": 280
    },
    {
      'id': 18,
      "name": "Vegetarian Garden Gourmet Burger",
      "macedonian_name": "ВЕГЕТАРИЈАНСКИ GARDEN GOURMET БУРГЕР",
      "details": "Vegetarian Garden Gourmet burger with sour cream with dill, lettuce, cheddar, caramelized onion, tomato, and bakery fries.",
      "ingredients": ["burger bun", "Vegetarian Garden Gourmet patty", "sour cream with dill", "lettuce", "cheddar", "caramelized onion", "tomato", "bakery fries"],
      "ingredients-mk": ["бургер лебче", "вегетаријанска Garden Gourmet плескавица", "павлака со копар", "марула", "чедар", "карамелизиран кромид", "домат", "пекарски помфрит"],
      "tags": ["burger", "vegetarian"],
      "hasSideDish": true,
      "sideDishes": ["bakery fries"],
      "spiceLevel": "none",
      "customize-options": [],
      "price": 300
    },
    {
      'id': 19,
      "name": "BBQ Burger",
      "macedonian_name": "BBQ БУРГЕР",
      "details": "BBQ Burger with 100% beef patty, cheddar, crispy onion, bacon, lettuce, tomato, and BBQ sauce.",
      "ingredients": ["burger bun", "beef patty", "cheddar", "crispy onion", "bacon", "lettuce", "tomato", "BBQ sauce", "bakery fries"],
      "ingredients-mk": ["бургер лебче", "јунешка плескавица", "чедар кашкавал", "похован кромид", "сланина", "ајсберг", "домат", "BBQ сос", "пекарски помфрит"],
      "tags": ["burger"],
      "hasSideDish": true,
      "sideDishes": ["bakery fries"],
      "spiceLevel": "mild",
      "customize-options": [],
      "price": 350
    },
    {
      'id': 20,
      "name": "Snickers Cake",
      "macedonian_name": "СНИКЕРС ТОРТА",
      "details": "A delicious Snickers cake made with whey protein, dates, honey, oats, peanuts, dark chocolate, peanut butter, beef gelatin, and coconut oil.",
      "ingredients": ["whey protein", "dates", "honey", "oats", "peanuts", "dark chocolate", "peanut butter", "beef gelatin", "coconut oil"],
      "ingredients-mk": ["веј протеин", "урми", "мед", "овес", "кикирики", "црно чоколадо", "путер од кикирики", "говетски желатин", "кокосово масло"],
      "tags": [],
      "hasSideDish": false,
      "sideDishes": [],
      "spiceLevel": "none",
      "customize-options": [],
      "price": 180
    },
    {
      'id': 21,
      "name": "Pancake",
      "macedonian_name": "ПАЛАЧИНКА",
      "details": "A pancake topped with Nutella, customizable with additional toppings.",
      "ingredients": ["pancake", "Nutella"],
      "ingredients-mk": ["палачинка", "нутела"],
      "tags": ["dessert", "customizable"],
      "hasSideDish": false,
      "sideDishes": [],
      "spiceLevel": "none",
      "customize-options": ["Plazma", "banana", "raspberry"],
      "price": 140
    },
    {
      'id': 22,
      "name": "Vegetarian Pizza",
      "macedonian_name": "ВЕГЕТАРИЈАНСКА ПИЦА",
      "details": "Vegetarian pizza with zucchini, red pepper, onion, cherry tomatoes, mushrooms, olives, oregano, and plant-based cheese.",
      "ingredients": ["zucchini", "red pepper", "onion", "cherry tomato", "mushrooms", "olives", "oregano", "plant-based cheese"],
      "ingredients-mk": ["тиквици", "црвена пиперка", "кромид", "шери домат", "печурки", "маслинки", "оригани", "растителен кашкавал"],
      "tags": ["pizza", "vegetarian"],
      "hasSideDish": false,
      "sideDishes": [],
      "spiceLevel": "none",
      "customize-options": [],
      "price": 310
    },
    {
      'id': 23,
      "name": "Fresh Orange Juice",
      "macedonian_name": "Цеден Портокал",
      "details": "Freshly squeezed orange juice.",
      "ingredients": ["orange"],
      "ingredients-mk": ["портокал"],
      "tags": ["juice"],
      "hasSideDish": false,
      "sideDishes": [],
      "spiceLevel": "none",
      "customize-options": [],
      "price": 150
    },
    {
      'id': 24,
      "name": "Fresh Lemon Juice",
      "macedonian_name": "Цеден Лимон",
      "details": "Freshly squeezed lemon juice.",
      "ingredients": ["lemon"],
      "ingredients-mk": ["лимон"],
      "tags": ["juice"],
      "hasSideDish": false,
      "sideDishes": [],
      "spiceLevel": "none",
      "customize-options": [],
      "price": 150
    },
    {
      'id': 25,
      "name": "Cosmopolitan",
      "macedonian_name": "COSMOPOLITAN",
      "details": "A classic cocktail made with vodka, fresh orange juice, lime, and cranberry.",
      "ingredients": ["vodka", "fresh orange juice", "lime", "cranberry"],
      "ingredients-mk": ["водка", "цеден портокал", "лимета", "брусница"],
      "tags": ["cocktail"],
      "hasSideDish": false,
      "sideDishes": [],
      "spiceLevel": "none",
      "customize-options": [],
      "price": 250
    },
    {
      'id': 26,
      "name": "Pina Colada",
      "macedonian_name": "PINA COLADA",
      "details": "A tropical cocktail with rum, coconut cream, and pineapple juice.",
      "ingredients": ["rum", "coconut cream", "pineapple juice"],
      "ingredients-mk": ["рум", "кокосов крем", "сок од ананас"],
      "tags": ["cocktail"],
      "hasSideDish": false,
      "sideDishes": [],
      "spiceLevel": "none",
      "customize-options": [],
      "price": 260
    },
    {
      'id': 27,
      "name": "Vodka Sour",
      "macedonian_name": "ВОДКА САУР",
      "details": "A sour vodka-based drink.",
      "ingredients": ["vodka", "lemon juice", "sugar syrup"],
      "ingredients-mk": ["водка", "цеден лимон", "шеќерен сируп"],
      "tags": ["cocktail"],
      "hasSideDish": false,
      "sideDishes": [],
      "spiceLevel": "none",
      "customize-options": [],
      "price": 250
    },
    {
      'id': 28,
      "name": "Whiskey Sour",
      "macedonian_name": "WHISKEY SOUR",
      "details": "A whiskey-based sour cocktail.",
      "ingredients": ["whiskey", "lemon juice", "sugar syrup"],
      "ingredients-mk": ["виски", "цеден лимон", "шеќерен сируп"],
      "tags": ["cocktail"],
      "hasSideDish": false,
      "sideDishes": [],
      "spiceLevel": "none",
      "customize-options": [],
      "price": 300
    },
    {
      'id': 29,
      "name": "Tequila Shot",
      "macedonian_name": "TEQUILA SHOT",
      "details": "A classic shot of tequila.",
      "ingredients": ["tequila"],
      "ingredients-mk": ["текила"],
      "tags": ["shot"],
      "hasSideDish": false,
      "sideDishes": [],
      "spiceLevel": "none",
      "customize-options": [],
      "price": 100
    },
    {
      'id': 30,
      "name": "Brain Shot",
      "macedonian_name": "BRAIN SHOT",
      "details": "A layered shot with martini, Baileys, and Monin grenadine.",
      "ingredients": ["martini", "Baileys", "Monin grenadine"],
      "ingredients-mk": ["мартини", "бејлис", "монин гренадин"],
      "tags": ["shot"],
      "hasSideDish": false,
      "sideDishes": [],
      "spiceLevel": "none",
      "customize-options": [],
      "price": 100
    },
    {
      'id': 31,
      "name": "Protein Shake",
      "macedonian_name": "ПРОТЕИНСКИ ШЕЈК",
      "details": "Protein shake made with whey protein and milk.",
      "ingredients": ["whey protein", "milk"],
      "ingredients-mk": ["веј протеин","млеко"],
      "tags": ["shake", "protein"],
      "hasSideDish": false,
      "sideDishes": [],
      "spiceLevel": "none",
      "customize-options": ["oreo protein", "chocolate protein", "vanilla protein"],
      "price": 110
    }
  ]
  
  
  export default menu_items;