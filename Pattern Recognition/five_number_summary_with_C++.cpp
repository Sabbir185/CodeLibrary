// Sabbir Ahmmed, sabbir185
#include<bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cout<<"Enter the number of Data : "<<endl;
    cin>>n;

    int data[n];
    cout<<"Enter all numbers : "<<endl;
    for(int i=0; i<n; i++)
    {
        cin>>data[i];
    }

    cout<<"\nSorted dataset is : "<<endl;

    sort(data, data+n);

    for(int i=0; i<n; i++)
    {
        cout<<data[i]<<" ";
    }

    cout<<"\n\nmin is : "<<data[0]<<endl;
    cout<<"max is : "<<data[n-1]<<endl;

    int m,l,r,h,s,d;
    double Q2,Q1,Q3;

    if(n%2==0)
    {
        m = ( n-1 ) / 2 + 1;
        Q2 = double( data[(n-1)/2] + data[n/2] ) / 2;
        cout<<"Q2 : "<<Q2<<endl;

        int left_data[m];
        int right_data[m];


        cout<<"\nleft side data"<<endl;
        for(int j=0; j<m; j++)
        {
            left_data[j] = data[j];

            cout<<left_data[j]<< " ";
        }

        if(m%2==0)
        {
            Q1 = double( left_data[(m-1)/2] + left_data[m/2] ) / 2;
            cout<<"\nQ1 : "<<Q1<<endl;

        }
        else
        {
            l = left_data[(m-1)/2] ;
            cout<<"\nQ1 : "<<l<<endl;
        }



        cout<<"\nright side data"<<endl;
        int cnt=0;
        for(int j=m; j<n; j++)
        {
            right_data[cnt] = data[j];

            cout<<right_data[cnt]<< " ";
            cnt += 1;
        }

        if(m%2==0)
        {
            Q3 = double( right_data[(m-1)/2] + right_data[m/2] ) / 2;
            cout<<"\nQ3 : "<<Q3<<endl;

        }
        else
        {
            r = right_data[(m-1)/2];
            cout<<"\nQ3 : "<<r<<endl;
        }



    }
    else
    {
        m = ( n - 1 )/ 2;
        Q2 = data[m];
        cout<<"\nQ2 : "<<Q2<<endl;

        int left_data[m];
        int right_data[m];


        cout<<"\nleft side data"<<endl;
        for(int j=0; j<m; j++)
        {
            left_data[j] = data[j];

            cout<<left_data[j]<< " ";
        }

        if(m%2==0)
        {
            Q1 = double( left_data[(m-1)/2] + left_data[m/2] ) / 2;
            cout<<"\nQ1 : "<<Q1<<endl;

        }
        else
        {
            l = left_data[(m-1)/2] ;
            cout<<"\nQ1 : "<<l<<endl;
        }



        cout<<"\nright side data"<<endl;
        int cnt=0;
        for(int j=m+1; j<n; j++)
        {
            right_data[cnt] = data[j];

            cout<<right_data[cnt]<< " ";
            cnt += 1;
        }

        if(m%2==0)
        {
            Q3 = double( right_data[(m-1)/2] + right_data[m/2] ) / 2;
            cout<<"\nQ3 : "<<Q3<<endl;

        }
        else
        {
            r = right_data[(m-1)/2];
            cout<<"\nQ3 : "<<r<<endl;
        }

    }


    return 0;
}
