import datetime

#to be inserted as YYYY, MM, DD
startDate = datetime.date(2013,3,1) # can be changed to input()
startDate = startDate.toordinal() # can be changed to input()
print(startDate)
endDate = datetime.date(2013,3,14)
endDate = endDate.toordinal()
print(endDate)

availableDates = {}

for i in range(startDate, endDate + 1):
    date = str(datetime.date.fromordinal(i))
    availableDates[date] = {}

#assuming all days the same time slot
for date, info in availableDates.items():
    info[930] = 50
    info[1200] = 50

#assuming indiv days have different timings
date = '2013-03-01'
timing = [930, 1200, 1500, 1800]
pax = [50, 75, 25, 100]

for i in range(len(timing)):
    availableDates[date][timing[i]] = pax[i]
    availableDates['2013-03-02'][timing[i]] = pax[i]
    availableDates['2013-03-04'][timing[i]] = pax[i]
    availableDates['2013-03-06'][timing[i]] = pax[i]
    availableDates['2013-03-10'][timing[i]] = pax[i]

print(availableDates)