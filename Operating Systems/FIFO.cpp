#include<bits/stdc++.h>
using namespace std;

int main()
{
    int i,j,n,a[50],frame[10],no,k,avail,count=0;
    cout<<"\n Enter the length of the Reference string : \n"<<endl;
    cin>>n;

    cout<<"\n Enter the reference string : "<<endl;
    for(i=1; i<=n; i++)
        cin>>a[i];

    cout<<"\n Enter the number of Frames : ";
    cin>>no;
    for(i=0; i<no; i++)
        frame[i]= -1;

    // initial frame
    cout<<"\n initial frame : \n"<<endl;
    for(int s=0; s<no; s++ )
    {
        cout<<"\t  "<<frame[s]<<endl;
        cout<<"\t"<<"------"<<endl;
    }
    cout<<"\n";

    j=0;
    cout<<" FIFO Page Replacement Frame : \n"<<endl;
    for(i=1; i<=n; i++)
    {
        cout<<" "<<a[i];
        avail=0;
        for(k=0; k<no; k++)
            if(frame[k]==a[i])
            {
                avail=1;
                cout<<"\t"<<"Page hit !"<<endl;
            }

        if (avail==0)
        {
            frame[j]=a[i];
            j=(j+1)%no;
            count++;
            for(k=0; k<no; k++)
            {
                cout<<"\t  "<<frame[k]<<endl;
                cout<<"\t"<<"-------"<<endl;
            }

        }
        cout<<"\n\n";
    }
    cout<<"Page fault is : "<<count<<endl;
    return 0;
}
