//
//  Person.m
//  ReactNativeXNative
//
//  Created by Emil Doychinov on 8/26/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "Person.h"

@implementation Person
- (instancetype) initWithDictionary: (NSDictionary *) dictionary {
  
  self = [super init];
  
  if (self) {
    self.firstName = [dictionary objectForKey:@"first_name"];
    self.lastName = [dictionary objectForKey:@"last_name"];
  }

  return self;
}
@end
