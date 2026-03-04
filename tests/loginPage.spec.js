import {test,expect} from '@playwright/test'
test('redbus',async({page})=>{

await page.goto("https://www.redbus.in/bus-tickets")
const pageTitle = await page.title()
await expect(page).toHaveTitle('Book Bus Tickets Online | Convenient Bus Booking with redBus')

const fromInput = await page.locator('#txtSource')
await fromInput.click()
await fromInput.fill('bhuba')
await expect(await page.locator('#C120_suggestion-wrap')).toBeVisible()

const suggestion = await page.locator("//li[@class='C120_suggestions_list']")
const suggetionCount = await suggestion.count()
await console.log(suggetionCount)

const suggestOptions = await page.locator('//div[@data-parentlocationtype="AREA"]').allTextContents()
console.log(suggestOptions)

const suugoption = await page.locator('//div[@data-parentlocationtype="AREA"]')
for(let i = 0;i<suggetionCount;i++)
{
    const OptionsText = await suugoption.nth(i).textContent()
    if(OptionsText.includes('Bermunda Bus Stand, Bhubaneswar'))
    {
        await suggestion.nth(i).click()
        break;
    }
    
    
}

//date picker
await page.locator('#txtOnwardCalendar').click()


const ExpectedmonthYear = "Aug 2027"
const Expecetddate = "27"

while(true){
 const CurrentmonthYear = await page.locator("//span[@class='calwid__year-month']").textContent()
 if(CurrentmonthYear?.trim()===ExpectedmonthYear){
    break;
 
 await page.locator("button[class='calwid__btn-next-month'] svg").click()
}
await page.locator(`span[class^='calwid__day ']:text-is("${Expecetddate}")`).click()

await page.locator("//button[contains(@class,'searchBuses')]").click()


await page.waitForTimeout(3000)
})


