/* Bismillahir Rahmanir Rahim
   Md. Sabbir Ahmmed
   dept. of CSE
   Northern University Of Business & Technology,Khulna
*/

#include <iostream>
#include <vector>
#include <algorithm>
#define endl "\n"
using namespace std;

int main()
{
    vector<int> arr;
    vector<int>::iterator it , k , e;

    int process,burst_time;
    cout<<"  Enter number of process = ";
    cin>>process;                // Total process input
    int arrival[process];       // array size define for arrival
    int n = process ;          // just store number of process

    cout<<"\n  Enter "<<process<<" processes = ";
    while(process--)                            // burst time input
    {
        cin>>burst_time;
        arr.push_back(burst_time) ;
    }

    cout<<"\n  Enter Arrival time for "<<n<<" processes = ";
    for(int i=0;i<n;i++)
    {
        cin>>arrival[i];                        // Arrival time input
    }

    int i=1,j=0,cnt=0,start=0,waiting_time=0,turn_around=0 ;
    double waiting_sum = 0 , turn_sum=0 ;

    cout<<"\n  Process     Arrival time     Burst time     Start time"<<endl;
    for( it=arr.begin(); it!=arr.end(); it++ )
    {
        start = cnt ;
        cout<<"\n     P("<< i <<")"<<" ----->   "<< arrival[j] <<"      ----->   "<< *it <<"     ----->   "<< start <<endl;
        cnt += *it;

        waiting_time = start - arrival[j] ;
        waiting_sum += waiting_time;          // total waiting time

        turn_around = *it + waiting_time ;   // *it our burst time
        turn_sum += turn_around ;            // total turn around time

        i++ ; j++ ;
    }


    //  ---> Gantt Chart design part <----

    int start2=0,cnt2=0,yes_done=0;
    int h=1;
    cout<<"\n\n   # Gantt Chart : \n"<<endl;
    cout<<"   ";
    for( k=arr.begin(); k!=arr.end(); k++)
    {
        cout<<"    P("<<h<<")";
        cout<<"  ";
        h++ ;
    }
    cout<<"\n";
    cout<<"   ";
    for( k=arr.begin(); k!=arr.end(); k++)
    {
        cout<<"|--------|";
    }

    cout<<"\n";
    cout<<"   ";

    for( k=arr.begin(); k!=arr.end(); k++)
    {
        start2 = cnt2 ;
        cout<< start2 <<"         ";    // start time
        cnt2 += *k;

        yes_done = *k ;                // for end time
    }

    e = find( arr.begin(),arr.end(),yes_done );
    cout<< start2 + (*e) ;

    // ----> End Gantt Chart design part <---


    cout<<"\n\n  Average waiting time     : "<< double(waiting_sum/n) <<endl;
    cout<<"\n  Average turn around time : "<<  double(turn_sum/n) <<endl;

    return 0;
}
