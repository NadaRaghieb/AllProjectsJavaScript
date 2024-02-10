let makeCoffee=[
    {
        title:'Iced Caramel Macchiato',
        recipe:'What you will need',
        step1:'2 shots espresso Starbucks® Holiday Blend by NESPRESSO® or Starbucks® Holiday Blend Ground Coffee',
        step2:'1 Tbsp salted caramel syrup',
        step3:'30 ml whipped cream (optional)',
        img:'IcedCaramel.png'
    },
    {
        title:'Latte Macchiato',
        recipe:'What you will need',
        step1:'2 shots espresso Starbucks® Holiday Blend by NESPRESSO® or Starbucks® Holiday Blend Ground Coffee',
        step2:'1 Tbsp salted caramel syrup',
        step3:'30 ml whipped cream (optional)',
        img:'LATTE_MACCHIATO.png'
    },
    {
        title:'Salted Caramel Espresso',
        recipe:'What you will need',
        step1:'2 shots espresso Starbucks® Holiday Blend by NESPRESSO® or Starbucks® Holiday Blend Ground Coffee',
        step2:'1 Tbsp salted caramel syrup',
        step3:'30 ml whipped cream (optional)',
        img:'Caramel Espresso.png'
    }
]
$('#cof1').click(()=>{
    window.localStorage.setItem("makeCoffee", JSON.stringify(makeCoffee[0]))
    console.log(makeCoffee[0]);
    window.location.href="../html/howMake.html"
}
)
$('#cof2').click(()=>{
    window.localStorage.setItem("makeCoffee", JSON.stringify(makeCoffee[1]))
    console.log(makeCoffee[1]);
    window.location.href="../html/howMake.html"
}
)
$('#cof3').click(()=>{
    window.localStorage.setItem("makeCoffee", JSON.stringify(makeCoffee[2]))
    console.log(makeCoffee[2]);
    window.location.href="../html/howMake.html"
}
)