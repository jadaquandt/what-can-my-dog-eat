const dogFoods = [
    {
        name: "Chocolate",
        answer: "No!",
        status: "harmful",
        reason: "Chocolate contains substances called methylxanthines, which are toxic to dogs. Even a little bit of chocolate, especially dark chocolate, can cause diarrhea and vomiting. A large amount can cause seizures, irregular heart function, and even death. If your dog does ingest chocolate, contact a veterinarian or Pet Poison Helpline as soon as possible.",
        category: "sweet"
    },
    {
        name: "Almonds",
        answer: "No!",
        status: "harmful",
        reason: "Almonds can cause gastric intestinal distress to your dog. They can also block the esophagus or even tear the windpipe if not chewed completely.",
        category: "misc"
    },
    {
        name: "Cinnamon",
        answer: "No!",
        status: "harmful",
        reason: "While cinnamon is not actually toxic to dogs, it’s best to avoid it. Cinnamon and its oils can irritate the inside of dogs’ mouths, making them uncomfortable and sick. It can also lower a dog’s blood sugar too much.",
        category: "misc"
    },
    {
        name: "Garlic",
        answer: "No!",
        status: "harmful",
        reason: "Garlic is part of the Allium family, which  contains a toxic principle known as N-propyl disulfide. Garlic can create anemia in dogs, causing side effects such as pale gums, elevated heart rate, weakness, and collapse."
    },
    {
        name: "Leeks",
        answer: "No!",
        status: "harmful",
        reason: "Leeks are part of the Allium family, which  contains a principle known as N-propyl disulfide which is toxic to dogs.",
        category: "veg"
    },
    {
        name: "Chives",
        answer: "No!",
        status: "harmful",
        reason: "Chives are part of the Allium family, which  contains a principle known as N-propyl disulfide which is toxic to dogs.",
        category: "veg"
    },
    {
        name: "Onion",
        answer: "No!",
        status: "harmful",
        reason: "Onions contain a principle known as N-propyl disulfide that is toxic to dogs. This compound causes a breakdown of red blood cells, leading to anemia in dogs.",
        category: "veg"
    },
    {
        name: "Alcohol",
        answer: "No!",
        status: "harmful",
        reason: "Alcohol can cause not only intoxication, lack of coordination, weak breathing and abnormal acidity but potentially even coma or death.",
        category: "misc"
    },
    {
        name: "Avocado",
        answer: "No!",
        status: "harmful",
        reason: "Avocados contain persin, which can cause diarrhea, vomiting and heart congestion. The most dangerous part of the avocado is the pit. If your dog happens to eat a small piece of avocado, it will probably be okay, but make sure you monitor your dog and call your vet for further care.",
        category: "veg"
    },
    {
        name: "Meat Trimmings",
        answer: "No!",
        status: "harmful",
        reason: "Cooked and uncooked fat trimmings can cause pancreatitis. Avoid giving these to your dog.",
        category: "meat"
    },
    {
        name: "Grapes",
        answer: "No!",
        status: "harmful",
        reason: "Grapes are known to be highly toxic to dogs though research has yet to pinpoint exactly which substance in the fruit causes this reaction. Unfortunately, grape toxicity can even be fatal. Ingesting the fruit could potentially lead to sudden kidney failure in dogs.",
        category: "veg"
    },
    {
        name: "Rasins",
        answer: "No!",
        status: "harmful",
        reason: "Raisins are known to be highly toxic to dogs though research has yet to pinpoint exactly which substance in the fruit causes this reaction. Unfortunately, raisin toxicity can even be fatal. Ingesting the fruit could potentially lead to sudden kidney failure in dogs.",
        category: "veg"
    },
    {
        name: "Macadamia Nuts",
        answer: "No!",
        status: "harmful",
        reason: "The consequences of eating macadamia nuts include vomiting, weakness, hyperthermia, and depression. Veterinarians and researchers have not identified what causes macadamia nuts to be toxic to dogs but what we do know is that even a small amount can cause severe symptoms.",
        category: "misc"
    },
    {
        name: "Pizza",
        answer: "No!",
        status: "harmful",
        reason: "While most dogs would enjoy a slice of pizza, it is not a good food choice for them because of poor nutritional value and side effects. Most of the toppings are not beneficial to your dog’s health and could be dangerous. Even the potentially good ingredients aren't suitable since they are likely to be salted or have sauce on them.",
        category: "misc"
    },
    {
        name: "Hot Dogs",
        answer: "No!",
        status: "harmful",
        reason: "Many hot dogs contain ingredients that are not good for dogs, such as sodium nitrate, which has been linked to cancer; monosodium glutamate (MSG); and sugars or artificial sweeteners. Hot dogs also often contain seasonings, such as garlic and onion powder, which can be toxic to dogs.",
        category: "misc"
    },
    {
        name: "Lemon",
        answer: "No!",
        status: "harmful",
        reason: "The skins of lemons contain a substance called psoralen, which can cause dogs to have gastrointestinal symptoms like vomiting and diarrhea. If very large amounts of psoralen are consumed by dogs, more severe symptoms, such as muscle tremors, difficulty walking, liver failure and death, can result.",
        category: "veg"
    },
    {
        name: "Lime",
        answer: "No!",
        status: "harmful",
        reason: "The skins of limes contain a substance called psoralen, which can cause dogs to have gastrointestinal symptoms like vomiting and diarrhea. If very large amounts of psoralen are consumed by dogs, more severe symptoms, such as muscle tremors, difficulty walking, liver failure and death, can result.",
        category: "veg"
    },
    {
        name: "Apricots",
        answer: "No!",
        status: "harmful",
        reason: "All parts of the apricot, including the stems, leaves and pits, are toxic to dogs. The large apricot seed contains enough cyanide in it to do serious harm to your canine. Ingesting seeds that contain cyanide can lead to the breakdown of the important enzyme that is responsible for oxygenating your dog’s cells. This can result in your dog having difficulty breathing, dilated pupils and even death.",
        category: "veg"
    },
    {
        name: "Oatmeal",
        answer: "Yes!",
        status: "allowed",
        reason: "High soluble fiber content makes oatmeal beneficial to your dog's digestive system and high volumes of vitamins and minerals like magnesium, copper, and iron makes oatmeal very nutritious.",
        preparation: "Raw or cooked",
        category: "misc"
    },
    {
        name: "Squash",
        answer: "Yes!",
        status: "allowed",
        reason: "Squash is rich in fiber as well as vitamins A, C, and K. It can help protect their eyesight, and improve their digestive health.",
        preparation: "Roasted or boiled plain is fine but raw squash should be avoided because it is harsh on the canine's digestive system and skin, and seeds can be poisonous to dogs.",
        category: "veg"
    },
    {
        name: "Sweet Potato",
        answer: "Yes!",
        status: "allowed",
        reason: "Sweet potatoes are low in fat, high in fiber, and vitamin-rich.",
        preparation: "Steamed or boiled, and served in small portions.",
        category: "veg"
    },
    {
        name: "Watermelon",
        answer: "Yes!",
        status: "allowed",
        reason: "Watermelon is one of the best human foods for dogs because of its antioxidant levels, how it improves immune system function, and increases hydration.",
        preparation: "Peeled. Your dog should never consume the rind or seeds of the watermelon, because they can be dangerous to her health.",
        category: "veg"
    },
    {
        name: "Coconut",
        answer: "Yes!",
        status: "allowed",
        reason: "Coconut contains lauric acid, which can help combat bacteria and viruses. It can also help with bad breath and clearing up skin conditions like hot spots, flea allergies, and itchy skin.",
        preparation: "The husk, shell, and coconut water from the coconut should be disposed of, but the meat and oil of the coconut are safe for dogs to eat.",
        category: "veg"
    },
    {
        name: "Pork",
        answer: "Yes!",
        status: "allowed",
        reason: "It's a great source of protein, vitamins and minerals.",
        preparation: "Skinless, unseasoned boiled pork with the fat trimmed is preferred. Pork should never be fed raw, however, due to the possibility of parasite infection.",
        category: "meat"
    },
    {
        name: "Mango",
        answer: "Yes!",
        status: "allowed",
        reason: "It’s loaded with Vitamins B6, C, E, and A as well as fiber. Mango is also high in antioxidants which help fight free radical damage and signs of aging.",
        preparation: "Peeled and pitted.",
        category: "veg"
    },
    {
        name: "Corn",
        answer: "Yes!",
        status: "allowed",
        reason: "Corn is one of the most common ingredients in most dog foods. It is a good source of protein, carbohydrates, linoleic acid, and antioxidants.",
        preparation: "Cooked and taken off the cob. Don't feed your dog the cob because it can be hard for a dog to digest and may cause an intestinal blockage.",
        category: "veg"
    },
    {
        name: "Corn Cobs",
        answer: "No!",
        status: "harmful",
        reason: "Corn itself is fine for dogs to eat but don't feed your dog the cob because it can be hard for a dog to digest and may cause an intestinal blockage.",
        preparation: "None",
        category: "veg"
    },
    {
        name: "Eggs",
        answer: "Yes!",
        status: "allowed",
        reason: "Cooked eggs are a wonderful source of protein and can help your dog's upset stomach.",
        preparation: "Eating raw egg whites can contribute to biotin deficiency, so be sure to cook the eggs all the way through before giving them to your pet.",
        category: "meat"
    },
    {
        name: "Raw eggs",
        answer: "No!",
        status: "harmful",
        reason: "Cooked eggs are fine for your dog but raw egg whites can contribute to biotin deficiency in dogs. Just don't do it.",
        preparation: "Eating raw egg whites can contribute to biotin deficiency, so be sure to cook the eggs all the way through before giving them to your pet.",
        category: "meat"
    },
    {
        name: "Peanut butter",
        answer: "Yes!",
        status: "allowed",
        reason: "Peanut butter can be an excellent source of protein for dogs. It contains heart-healthy fats, vitamins B and E and niacin. Just read the label and be sure it doesn't contain xylitol which is toxic to dogs.",
        preparation: "Raw, unsalted peanut butter is the healthiest option. Read the label carefully to be sure the peanut butter does not contain xylitol, a sugar substitute that can be toxic to dogs.",
        category: "misc"
    },
    {
        name: "Salmon",
        answer: "Yes!",
        status: "allowed",
        reason: "Cooked salmon is an excellent source of protein, good fats, and amino acids. It promotes joint and brain health and gives dog-immune systems a nice boost.",
        preparation: "Salmon shuld be fully cooked. Do not feed your dog raw or undercooked salmon.",
        category: "meat"
    },
    {
        name: "Sushi",
        answer: "Yes, but...",
        status: "allowed",
        reason: "If the sushi is fresh and has limited ingredients, such as salmon or cucumber rolls, you could treat your dog to a roll or two. However, old sushi or rolls that could potentially have unsafe ingredients for dogs are best avoided.",
        preparation: "Simple rolls like salmon, tuna, or cucumber rolls are ok.",
        category: "misc"
    },
    {
        name: "Turkey",
        answer: "Yes!",
        status: "allowed",
        reason: "Turkey is an ingredient in many commercial dog foods and is rich in nutrients like protein, riboflavin, and phosphorous. But don’t forget to check for bones; poultry bones can splinter during digestion, causing blockage or even tears in the intestines. Also any meat with excessive salt, seasonings, onions or garlic should not be fed.",
        preparation: "Be sure to remove excess fat and skin from the meat.",
        category: "meat"
    },
    {
        name: "Chicken bones",
        answer: "No!",
        status: "harmful",
        reason: "Poultry bones can splinter during digestion, causing blockage or even tears in the intestines.",
        category: "meat"
    },
    {
        name: "Turkey bones",
        answer: "No!",
        status: "harmful",
        reason: "Poultry bones can splinter during digestion, causing blockage or even tears in the intestines.",
        category: "meat"
    },
    {
        name: "Bell Pepper",
        answer: "Yes!",
        status: "allowed",
        reason: "Bell peppers are rich in vitamins A, E, B6, and are great sources of vitamin C and beta-carotene, which are antioxidants important for a dog’s healthy immune system. Any color bell pepper is fine for your dog as long as it's plain and in moderation.",
        preparation: "Large dogs should eat less than one-half plain, unseasoned pepper and that small dogs eat less than one-quarter pepper at a time. Consider removing the seeds and stems to prevent indigestion.",
        category: "veg"
    },
    {
        name: "Carrots",
        answer: "Yes!",
        status: "allowed",
        reason: "Raw and cooked carrots are healthy options for dogs and make a nutritious add-in to meals. Talk to your vet about the number of carrots you should feed your dog per day.",
        preparation: "Cut carrots into bite-size chunks before feeding them to your dog. As a result, you will prevent choking, especially in small dogs.",
        category: "veg"
    },
    {
        name: "Chicken",
        answer: "Yes!",
        status: "allowed",
        reason: "Many dog foods contain it and cooked chicken is a good source of protein for your dog. Avoid seasonings when feeding your dog chicken. Avoid feeding her chicken bones though as they splinter and can cause her harm.",
        preparation: "Most sources recommend against raw chicken, due to the risk of salmonella or bacterial infections. Any unseasoned roasted, poached, grilled, or baked chicken can be served on its own or mixed with your dog’s regular meal.  Be sure to take chicken off the bone.",
        category: "meat"
    },
    {
        name: "Green Beans",
        answer: "Yes!",
        status: "allowed",
        reason: "Green beans are full of important vitamins and minerals, such as protein, iron, calcium, and vitamins B6, A, C, and K. Plain green beans of all types are also full of fiber and are low in calories.",
        preparation: "Chopped, steamed, raw, or canned — all types of green beans are safe for dogs to eat, as long as they are plain. No salt, oil, spices, garlic or onions.",
        category: "veg"
    },
    {
        name: "Blackberries",
        answer: "Yes!",
        status: "allowed",
        reason: "Blackberries are a healthy treat for dogs. They are low in calories and rich in vitamins, minerals and antioxidants. Additionally, blackberries are a great source of fiber.",
        preparation: "Fresh or frozen raspberries in moderation are fine.",
        category: "veg"
    },
    {
        name: "Peas",
        answer: "Yes!",
        status: "allowed",
        reason: "Peas are a good source of vitamins, including A, K, and the B vitamins. They’re packed with minerals like iron, zinc, potassium, and magnesium. They’re also rich in protein and high in fiber.",
        preparation: "You can feed your dog fresh, frozen, or thawed peas, but do not give her canned peas. Like many canned vegetables, canned peas typically have a lot of added sodium, which is harmful to dogs.",
        category: "veg"
    },
    {
        name: "Rice",
        answer: "Yes!",
        status: "allowed",
        reason: "White rice is often recommended to help dogs with digestive issues. One of the reasons white rice is the chosen grain for a dog with an upset stomach is that it’s easy to digest, quick to prepare, and low in fiber.",
        preparation: "When preparing rice for your dog, boil it in water and do not add any seasonings or spices.",
        category: "veg"
    },
    {
        name: "Beef",
        answer: "Yes!",
        status: "allowed",
        reason: "Beef is a common ingredient in many dog foods. It’s an excellent source of protein and many important vitamins and minerals that your dog needs for overall health",
        preparation: "The beef that you feed to your dog should be plain, without any added sauces or seasonings.",
        category: "meat"
    },
    {
        name: "Mushrooms",
        answer: "Yes!",
        status: "allowed",
        reason: "Store-bought mushrooms, such as portobello mushrooms, are safe for dogs to eat. However, some wild mushrooms are toxic to your dog and may cause mushroom poisoning.",
        preparation: "Only plain, store-bought mushrooms are safe to feed dogs. Unless the mushroom is served plain, it is generally safer to avoid feeding dishes with mushrooms to dogs.",
        category: "veg"
    },
    {
        name: "Cucumbers",
        answer: "Yes!",
        status: "allowed",
        reason: "Cucumbers are perfectly safe for dogs to eat, and offer a low-calorie, crunchy snack that many dogs love. Cucumbers are also very low in sodium and fat.",
        preparation: "To prevent your dog from choking, always cut food down to a manageable size, especially for small dogs or for dogs that wolf down their meals. Feeding a whole cucumber is not advisable.",
        category: "veg"
    },
    {
        name: "Celery",
        answer: "Yes, but...",
        status: "limited",
        reason: "Some dogs find the texture of this raw veggie difficult to chew. Eating too much celery can also have a diuretic effect on your dog.",
        preparation: "Remove leaves and cut celery sticks into smaller pieces to avoid choking hazards.",
        category: "veg"
    },
    {
        name: "Cauliflower",
        answer: "Yes, but...",
        status: "limited",
        reason: "Cooked, plain cauliflower is fine but it's also known for increasing flatulence in dogs.",
        preparation: "Raw or cooked unseasoned, but cooked is easier on your dog's digestion.",
        category: "veg"
    },
    {
        name: "Strawberries",
        answer: "Yes, but...",
        status: "limited",
        reason: "Too many strawberries can cause digestive upset in dogs.",
        preparation: "Cut them into smaller pieces to avoid choking and to make them easier to eat.",
        category: "veg"
    },
    {
        name: "Banana",
        answer: "Yes, but...",
        status: "limited",
        reason: "Due to the high sugar content of bananas and their ability to cause constipation, however, bananas should only be given to your pup in smaller quantities and on rare occasions.",
        preparation: "Remove the peel and give in small pieces.",
        category: "veg"
    },
    {
        name: "Blueberries",
        answer: "Yes, but...",
        status: "limited",
        reason: "While blueberries for dogs are safe, you should give them in moderation to avoid stomach upset. Blueberries are particularly good for boosting the immune system, preventing urinary tract infections, reducing the risk of eye diseases, and curing constipation.",
        preparation: "Raw blueberries are fine to give your dog in moderation.",
        category: "veg"
    },
    {
        name: "Shrimp",
        answer: "Yes, but...",
        status: "limited",
        reason: "Too much shrimp can cause an increase in cholesterol, so it should be avoided in dogs with cardiovascular disorders or obesity. But in moderation, plain shrimp provide high levels of copper, omega fatty acids, and selenium to your dog.",
        preparation: "Boiled and served plain without legs and shell. Raw shellfish should never be fed to your dog due to the number of bacteria it may contain.",
        category: "meat"
    },
    {
        name: "Oranges",
        answer: "Yes, but...",
        status: "limited",
        reason: "Too many oranges may also cause digestive upset in some dogs.",
        preparation: "Portions should be limited to a single segment or two.",
        category: "veg"
    },
    {
        name: "Pears",
        answer: "Yes, but...",
        status: "limited",
        reason: "Pears are a high fiber fruit and offer dogs healthy doses of Vitamins A and C. But too many pears can cause diarrhea in dogs, so they should be given in moderation.",
        preparation: "Cut them into smaller pieces and take out any seeds.",
        category: "veg"
    },
    {
        name: "Bread",
        answer: "Yes, but...",
        status: "limited",
        reason: "Bread won’t hurt your dog, but it also won’t provide any health benefits either. It has no nutritional value and can really pack on the carbohydrates and calories.",
        preparation: "Small amounts of plain bread (no spices and definitely no raisins).",
        category: "misc"
    },
    {
        name: "Cashews",
        answer: "Yes, but...",
        status: "limited",
        reason: "Cashews have calcium, magnesium, antioxidants, and proteins, but while these nuts contain less fat than others, too many can lead to weight gain and other fat-related conditions.",
        preparation: "Cashews should be unsalted but given only a few at a time.",
        category: "misc"
    },
    {
        name: "Cheese",
        answer: "Yes, but...",
        status: "limited",
        reason: "Many kinds of cheese can be high in fat, so it's best to feed dogs in small to moderate quantities.",
        preparation: "If possible, go for lower-fat varieties like cottage cheese or mozzarella.",
        category: "misc"
    },
    {
        name: "Tuna",
        answer: "Yes, but...",
        status: "limited",
        reason: "In moderation, cooked, fresh tuna is an excellent source of omega-3 fatty acids, which promotes heart and eye health. As for canned tuna should be avoided in excess.",
        preparation: "Cooked and fresh, without any spices.",
        category: "meat"
    },
    {
        name: "Apple",
        answer: "Yes, but...",
        status: "limited",
        reason: "Apples are an excellent source of vitamin C, fiber, and calcium. However, eating too many apples can cause your dog to have diarrhea, so they’re best eaten in moderation.",
        preparation: "Cut it into pieces, so that it’s easier to chew. Avoid giving your dog the seeds, as they contain cyanide. You also want to keep the core away because it poses a choking hazard.",
        category: "veg"
    },
    {
        name: "Tomatoes",
        answer: "Yes, but...",
        status: "limited",
        reason: "Solanine, a substance found in the stem and leaves of the tomato, is harmful to dogs in large quantities. Luckily, solanine is mostly concentrated in the green parts of the tomato plant.",
        preparation: "Ripe tomatoes themselves, without the stems or leaves are generally safe to feed to dogs.",
        category: "veg"
    },
    {
        name: "Olives",
        answer: "Yes, but...",
        status: "limited",
        reason: "Olives are full of healthy fats and proteins, though too many can add unnecessary calories to your dog’s diet.",
        preparation: "Plain, unsalted olives are ok.",
        category: "veg"
    },
    {
        name: "Popcorn",
        answer: "Yes, but...",
        status: "limited",
        reason: "Popcorn actually contains several minerals important to canine nutrition, like magnesium and zinc, along with fiber and trace amounts of vitamins. However, toppings like butter, oils, salt, and the others can lead to intestinal upset, and the fats in oil and butter also contribute to obesity in dogs.",
        preparation: "Plain, air-popped popcorn makes a nice occasional treat for your dog. But, kernels can get stuck in dogs’ teeth and pose a choking hazard, so it is probably a good idea to keep kernels away from dogs.",
        category: "misc"
    },
    {
        name: "Pineapple",
        answer: "Yes, but...",
        status: "limited",
        reason: "Pineapple is fine for dogs in moderation as it can have adverse effects on your dog’s digestive system if fed in large amounts. It is full of vitamins and minerals, including manganese, copper, potassium, magnesium, iron, and small amounts of calcium, phosphorous, and zinc.",
        preparation: "Ripe, raw pineapple is best for your dog. The tough, central core of the pineapple has the potential to cause obstructions, as does the spiny skin, so stick to feeding the flesh of the pineapple for your dog’s safety.",
        category: "veg"
    },
    {
        name: "Raspberries",
        answer: "Yes, but...",
        status: "limited",
        reason: "Raspberries are low in sugar and calories but high in fiber, manganese, and vitamin C. But they also contain one of the highest levels of xylitol, which can be toxic to dogs. This means you should only feed them to your dog in moderation.",
        preparation: "Fresh or frozen raspberries in moderation are fine.",
        category: "veg"
    },
    {
        name: "Broccoli",
        answer: "Yes, but...",
        status: "limited",
        reason: "Broccoli is high in fiber, vitamin C and low in fat. However, this vegetable should always be given in small quantities because the florets contain isothiocyanates, which can cause gastric irritation in dogs.",
        preparation: "Dogs can eat both cooked and raw broccoli, as long as there are no seasonings or oils added.",
        category: "veg"
    },
    {
        name: "Potatoes",
        answer: "Yes, but...",
        status: "limited",
        reason: "Potatoes do contain vitamins and other nutrients that dogs need, but you feed your dog too many, there could be adverse health effects. You should also never feed your dog a raw potato. Raw potatoes contain solanine, a compound that is toxic to some dogs. ",
        preparation: "If you do feed your dog potatoes, it should be baked or boiled, with nothing added to it. Potatoes fried in oil, such as french fries or potatoes with butter or salt are not healthy for dogs.",
        category: "veg"
    },
    {
        name: "Cherries",
        answer: "Yes, but...",
        status: "limited",
        reason: "Dogs can eat fresh, pitted cherries in moderate amounts. However, cherry pits contain cyanide which is poisonous to dogs when consumed in large amounts. Additionally, cherries may also cause upset stomach and diarrhea in dogs if they eat too many.",
        preparation: "Fresh, pitted and limited to one or two cherries at a time.",
        category: "veg"
    },
    {
        name: "Asparagus",
        answer: "Yes, but...",
        status: "limited",
        reason: "While cooked asparagus is safe for dogs to eat, it can also result in urine that smells unpleasant. Your dog might also have difficulty digesting raw asparagus, because it is so tough.",
        preparation: "Simply boil or steam the vegetable. You should also chop it up into small pieces before you feed it to them.",
        category: "veg"
    },
    {
        name: "Spinach",
        answer: "Yes, but...",
        status: "limited",
        reason: "Spinach contains large amounts of vitamins A, B, C, K, iron, antioxidants, beta-carotene, and roughage, which stimulate the digestive tract. Small amounts of spinach can provide benefits. However, spinach is very high in oxalic acid, which blocks the body’s ability to absorb calcium and can lead to kidney damage. But your dog would have to eat a very large quantity of spinach to cause damage.",
        preparation: "In very small amounts, raw or cooked plain spinach is ok for your dog.",
        category: "veg"
    },
    {
        name: "Ice Cream",
        answer: "Yes, but...",
        status: "limited",
        reason: "While not a major danger if ice cream is given in small amounts as a treat, for dogs with obesity, diabetes, allergies or dairy intolerance, ice cream could be a big problem. Although some dog owners do feed their dogs ice cream, we cannot say that it is a good dessert for dogs, especially when there are other options that are less likely to cause digestive problems.",
        preparation: "Rather than feeding your dog ice cream, look up a recipe for dog friendly ice cream or pick up a ready-made one from your local pet store.",
        category: "sweets"
    },
    {
        name: "Poop",
        answer: "No!",
        status: "harmful",
        reason: "Come on now! That's just gross. Why would you search that?",
        category: "misc"
    },
    {
        name: "Cake",
        answer: "No!",
        status: "harmful",
        reason: "Cake is full of sugar and although your dog will likely be okay if she gets a little bit, it's best to avoid this treat.",
        category: "sweets"
    },
    {
        name: "Oreos",
        answer: "No!",
        status: "harmful",
        reason: "I know she's staring you down, looking at those delicious Oreo cookies, but just say no. She doesn't need the sugar. Plus, aren't they chocolate?",
        category: "sweets"
    }
]

export default dogFoods